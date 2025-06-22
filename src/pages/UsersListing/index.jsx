import api from "../../services/api"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import TrashImage from "../../../src/assets/trash.svg"
import { Container, Title, ContainerUsers, IconUsers, TrashButton, AvatarUser, Content } from "./styles"
import { useNavigate } from "react-router-dom"


const UsersListing = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const getUsers = async () => {
            const { data } = await api.get("/usuarios")
            setUsers(data)
            console.log(data)
        }
        getUsers()
    }, [])

    const deleteUser = async (id) => {
        await api.delete(`/usuarios/${id}`)

        // const userUpdate = users.filter(user => user.id !== id)
        // setUsers(userUpdate)
        console.log("Antes:", users)
        const userUpdate = users.filter(user => user.id !== id)
        console.log("Depois:", userUpdate)
        setUsers(userUpdate)
    }

    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <IconUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <Content >
                            <h3>{user.name} </h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </Content>
                        <TrashButton onClick={() => deleteUser(user.id)} src={TrashImage} alt="trash-icon" />
                    </IconUsers>
                ))}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate("/")}>Voltar</Button>
        </Container>)


}


export default UsersListing