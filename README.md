# Página de cadastro e leitura de usuarios

Página de cadastro e listagem de usuários desenvolvido em React, utilizando Vite para build e ambiente de desenvolvimento, roteamento com React Router DOM e estilização com styled-components. O foco está na componentização, integração com APIs REST, organização de código e responsividade — o site é totalmente adaptado para diferentes tamanhos de tela (desktop e dispositivos móveis).

Pagina inicial:

![image](https://github.com/user-attachments/assets/b61edd49-c601-4f0d-bf6d-1cc1c319f2c5)

Pagina de listagem de usuarios:

![image](https://github.com/user-attachments/assets/a19ed39d-f0e0-42ab-8204-923a3a421dd6)

Versão mobile:

<img src= https://github.com/user-attachments/assets/57e2c81c-ca16-445c-a964-a196fdcb5536 height="600" width= "280">      <img src= https://github.com/user-attachments/assets/5ce63b65-6d19-4541-abde-41d09e83f71a height="600" width= "280">




## Principais Tecnologias

- **React**
- **Vite**
- **React Router DOM**
- **Styled-components**
- **Axios**
- **PropTypes**

## Estrutura do Projeto

- `/src`: Código-fonte dos componentes, páginas e lógica de cadastro/listagem de usuários.
- `/public`: Arquivos estáticos.
- `package.json`: Gerenciamento de dependências e scripts.
- `vite.config.js`: Configuração do Vite.

## Funcionalidades

- **Responsividade:** layout totalmente adaptado para diferentes tamanhos de tela, proporcionando ótima experiência tanto no desktop quanto em dispositivos móveis.
- Cadastro de novos usuários com nome, idade e email.
- Listagem dos usuários cadastrados.
- Remoção de usuários da lista.
- Consumo de API REST (endpoints `/usuarios`) via Axios para operações de cadastro, listagem e exclusão.
- Navegação entre páginas de cadastro e listagem utilizando React Router DOM.
- Componentização da interface e estilização dinâmica com styled-components.

## Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/Victor-Avilla/user-sign-in.git
   cd user-sign-in
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Rode o ambiente de desenvolvimento:
   ```sh
   npm run dev
   ```
