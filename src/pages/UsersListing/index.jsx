import api from "../../services/api"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
const UsersListing = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await api.get("/usuarios")
            setUsers(data)
            console.log(data)
        }
        getUsers()
    }, [])

    return (
        <div>
            <TopBackground />
            <h1>listagem de usuarios</h1> {users.map((user) => (
                <div>
                    <p>{user.name} </p>
                    <p>{user.age}</p>
                    <p>{user.email}</p>
                </div>
            ))}
            <Button>Voltar</Button>
        </div>)


}


export default UsersListing