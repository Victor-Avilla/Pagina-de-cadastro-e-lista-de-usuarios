# Página de Cadastro e Lista de Usuários

Aplicação fullstack para cadastro, listagem e remoção de usuários, desenvolvida com **React** (frontend) e **Node.js/Express** + **Prisma** (backend). O backend utiliza IDs aleatórios e validação de maioridade no cadastro. Projeto focado em componentização, integração com APIs REST, organização de código e responsividade.

⚠️ **Esta versão está publicada apenas com o front-end funcional. O back-end está conectado a um banco de dados local e não está disponível na versão online, servindo apenas para fins demonstrativos.**  

🔗 **Visualize o projeto online (deploy feito no Vercel):** [https://pagina-de-cadastro-e-lista-git-bd1d14-victors-projects-86a43880.vercel.app?_vercel_share=Ay3AOGQmWS7ZwwpgqZRmdbCeiQKnZwoK](https://pagina-de-cadastro-e-lista-git-bd1d14-victors-projects-86a43880.vercel.app?_vercel_share=Ay3AOGQmWS7ZwwpgqZRmdbCeiQKnZwoK)


## Imagens

Página inicial:

![image](https://github.com/user-attachments/assets/b61edd49-c601-4f0d-bf6d-1cc1c319f2c5)

Página de listagem de usuários:

![image](https://github.com/user-attachments/assets/fc8ded9a-c419-4863-9a55-2255271d5e11)


Versão mobile:

<img src="https://github.com/user-attachments/assets/57e2c81c-ca16-445c-a964-a196fdcb5536" height="600" width="280"> <img src=https://github.com/user-attachments/assets/b8b0e4fc-9662-4ee0-b811-8b3ecf9bb9fe height="600" width="280">

---

## Principais Tecnologias

- **Frontend**
  - React
  - Vite
  - React Router DOM
  - Styled-components
  - Axios
  - PropTypes
- **Backend**
  - Node.js
  - Express
  - Prisma ORM
  - Banco de Dados (Mongo Db)

## Estrutura do Projeto

- `/src`: Código fonte do frontend (componentes, páginas, lógica de cadastro/listagem de usuários).
- `/public`: Arquivos do frontend.
- `/backend`: Código-fonte do backend (Express, Prisma, rotas).
- `package.json`: Gerenciamento de dependências e scripts.
- `vite.config.js`: Configuração do Vite.
- `prisma/schema.prisma`: Configuração do banco de dados.

## Funcionalidades

- **Responsividade:** Layout adaptado para diferentes tamanhos de tela.
- Cadastro de novos usuários (nome, idade, email) – validação: apenas maiores de idade (menores recebem erro 400 e alerta no frontend).
- Listagem dos usuários cadastrados.
- Remoção de usuários da lista (backend e frontend), com atualização instantânea da interface.
- Consumo de API REST (`/usuarios`) via Axios.
- Geração automática de avatares para cada usuário cadastrado utilizando a [API UI Avatars](https://ui-avatars.com/).
- Navegação entre páginas de cadastro e listagem com React Router DOM.
- Componentização e estilização dinâmica com styled-components.
  
⚠️ **Backend disponível apenas localmente** – a versão em produção contém apenas o front-end visual.

