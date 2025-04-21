
import { Title, Container, Form, ContainerInputs, Input, Button, TopBackground, InputLabel } from "./styles.js"

function App() {

  return (
    <Container>
      <TopBackground>
        <img src="" alt="" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuario</Title>

        <ContainerInputs>
          <div>
            
              <div><InputLabel>Nome:<span>*</span> </InputLabel>
                <Input type="text" placeholder="Nome do usuário" />
              </div>

              <div><InputLabel>Idade:<span>*</span> </InputLabel>
                <Input type="number" placeholder="Idade" />
              </div>

          </div>
            <div><InputLabel>Email:<span>*</span> </InputLabel>
            <Input type="email" placeholder="Email" />
            </div>

        </ContainerInputs>
        <Button>Cadastrar</Button>
      </Form>

    </Container>
  )
}

export default App
