# 📄 Página de Cadastro e Lista de Usuários | User Registration and Listing Page

Aplicação fullstack para cadastro, listagem e remoção de usuários, desenvolvida com **React** (frontend) e **Node.js/Express** + **Prisma** (backend). O backend utiliza IDs aleatórios e validação de maioridade no cadastro. Projeto focado em componentização, integração com APIs REST, organização de código e responsividade.  
\
Fullstack application for registering, listing, and removing users, developed using **React** (frontend) and **Node.js/Express** with **Prisma** (backend). The backend uses random IDs and includes age validation during registration. This project focuses on component-based architecture, REST API integration, code organization, and responsiveness.

⚠️ **Esta versão está publicada apenas com o front-end funcional. O back-end está conectado a um banco de dados local e não está disponível na versão online, servindo apenas para fins demonstrativos.**  
\
⚠️ **This version includes only the functional front-end. The back-end is connected to a local database and is not available in the live version, serving for demonstration purposes only.**

🔗 **Visualize o projeto online (Vercel):**  
🔗 **View the project online (Vercel):**  
[https://pagina-de-cadastro-e-lista-git-bd1d14-victors-projects.vercel.app](https://pagina-de-cadastro-e-lista-git-bd1d14-victors-projects.vercel.app)

---

## 🖼️ Imagens | Screenshots

### Página inicial | Home page
![image](https://github.com/user-attachments/assets/b61edd49-c601-4f0d-bf6d-1cc1c319f2c5)

### Listagem de usuários | User listing page
![image](https://github.com/user-attachments/assets/fc8ded9a-c419-4863-9a55-2255271d5e11)

### Versão mobile | Mobile version  
<img src="https://github.com/user-attachments/assets/57e2c81c-ca16-445c-a964-a196fdcb5536" height="600" width="280"> <img src=https://github.com/user-attachments/assets/b8b0e4fc-9662-4ee0-b811-8b3ecf9bb9fe height="600" width="280">

---

## 🚀 Principais Tecnologias | Key Technologies

**Frontend**  
- React  
- Vite  
- React Router DOM  
- Styled-components  
- Axios  
- PropTypes

**Backend**  
- Node.js  
- Express  
- Prisma ORM  
- MongoDB

---

## 📁 Estrutura do Projeto | Project Structure

- `/src`: Código fonte do frontend  
  `/src`: Front-end source code  
- `/public`: Arquivos estáticos do frontend  
  `/public`: Front-end static files  
- `/backend`: Código do backend (Express + Prisma)  
  `/backend`: Back-end source code (Express + Prisma)  
- `package.json`: Gerenciador de dependências e scripts  
  `package.json`: Dependency and script manager  
- `vite.config.js`: Configuração do Vite  
  `vite.config.js`: Vite configuration  
- `prisma/schema.prisma`: Schema do banco de dados  
  `prisma/schema.prisma`: Database schema

---

## ✅ Funcionalidades | Features

- **Responsividade** do layout para vários tamanhos de tela  
  **Responsive design** for multiple screen sizes  
- Cadastro de usuários com nome, idade e e-mail (validação de maioridade)  
  User registration with name, age, and email (18+ only validation)  
- Listagem dos usuários cadastrados  
  Listing of registered users  
- Remoção de usuários da lista com atualização em tempo real  
  User deletion with real-time interface update  
- Consumo de API REST (`/usuarios`) com Axios  
  REST API consumption (`/usuarios`) with Axios  
- Geração automática de avatares com [UI Avatars](https://ui-avatars.com/)  
  Automatic avatar generation via [UI Avatars](https://ui-avatars.com/)  
- Navegação entre páginas com React Router DOM  
  Navigation between pages using React Router DOM  
- Componentização e estilização com styled-components  
  Componentization and styling with styled-components  

⚠️ **Backend disponível apenas localmente** – a versão online é somente visual (frontend).  
⚠️ **Back-end is available locally only** – the production version includes only the front-end.
