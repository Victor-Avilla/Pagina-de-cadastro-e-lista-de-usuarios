import { useRef } from "react"
import api from "../../services/api"
import { Title, Container, Form, ContainerInputs, Input, InputLabel } from "./styles"
import TopBackground from "../../components/TopBackground"

// import TrashImage from "../../../src/assets/trash.svg"
import Button from "../../components/Button"
function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  async function registerNewUser() {

    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })
    console.log(data)
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

        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário </Button>
      </Form>

    </Container>
  )
}

export default Home
