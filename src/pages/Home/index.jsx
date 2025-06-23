import { useRef } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import { Title, Container, Form, ContainerInputs, Input, InputLabel } from "./styles"
import TopBackground from "../../components/TopBackground"

// import TrashImage from "../../../src/assets/trash.svg"
import Button from "../../components/Button"
function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()
 
    async function registerNewUser() {
      try {
        const data = await api.post('/usuarios', {
          name: inputName.current.value,
          age: parseInt(inputAge.current.value),
          email: inputEmail.current.value
        })
        alert("Cadastro realizado com sucesso. Bem vindo(a) " + data.data.name)

      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert("Cadastro negado, você é menor de idade")
        } else {
          alert("Erro ao cadastrar usuário")
        } 
      }
    }
  
  return (
    <Container>
      <TopBackground />


      <Form>
        <Title>Cadastrar Usuario</Title>

        <ContainerInputs>

          <div>
            <InputLabel>Nome:<span> *</span> </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>Idade:<span> *</span> </InputLabel>
            <Input type="number" placeholder="Idade" ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100' }}>
          <InputLabel>Email:<span> *</span> </InputLabel>
          <Input type="email" placeholder="Email" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário </Button>

        <Button type="button" onClick={() => navigate("/listagem-de-usuarios")}>Ver Lista de Usuários </Button>
      </Form>

    </Container>
  )
}

export default Home
