
import { Title, Container, Form, ContainerInputs, Input, Button, TopBackground, InputLabel } from "./styles.js"
import UserImage from "./assets/users.png"
import TrashImage from "./assets/trash.svg"
function App() {

  return (
    <Container>
      <TopBackground>
        <img src={UserImage} alt="icone-usuarios" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuario</Title>

        <ContainerInputs>

          <div>
            <InputLabel>Nome:<span> *</span> </InputLabel>
            <Input type="text" placeholder="Nome do usuário" />
          </div>

          <div>
            <InputLabel>Idade:<span> *</span> </InputLabel>
            <Input type="number" placeholder="Idade" />
          </div>

        </ContainerInputs>

        <div style={{width:'100'}}>
          <InputLabel>Email:<span> *</span> </InputLabel>
          <Input type="email" placeholder="Email" />
        </div>

        <Button>Cadastrar Usuário </Button>
      </Form>

    </Container>
  )
}

export default App
