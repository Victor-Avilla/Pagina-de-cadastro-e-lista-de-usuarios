# Página de Cadastro e Lista de Usuários

Aplicação fullstack para cadastro, listagem e remoção de usuários, desenvolvida com **React** (frontend) e **Node.js/Express** + **Prisma** (backend). O backend utiliza IDs aleatórios (string) e validação de maioridade no cadastro. Projeto focado em componentização, integração com APIs REST, organização de código e responsividade.

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
  - Banco de Dados (ex: SQLite, PostgreSQL)

## Estrutura do Projeto

- `/src`: Código-fonte do frontend (componentes, páginas, lógica de cadastro/listagem de usuários).
- `/public`: Arquivos estáticos do frontend.
- `/backend` (ou raiz): Código-fonte do backend (Express, Prisma, rotas).
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

## Instalação e Execução

### 1. Clone o repositório

```sh
git clone https://github.com/Victor-Avilla/Pagina-de-cadastro-e-lista-de-usuarios.git
cd Pagina-de-cadastro-e-lista-de-usuarios
```

### 2. Instale as dependências do backend

```sh
cd backend
npm install
```

### 3. Configure o banco de dados e rode as migrations do Prisma

```sh
npx prisma migrate dev
```

### 4. Inicie o backend

```sh
npm run dev
```
O backend rodará em `http://localhost:3000`

### 5. Instale as dependências do frontend

```sh
cd ../ # volte para a raiz, se necessário
npm install
```

### 6. Inicie o frontend

```sh
npm run dev
```
O frontend rodará em `http://localhost:5173`

---
