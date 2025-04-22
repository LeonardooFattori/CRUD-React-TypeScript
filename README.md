# Projeto Full-Stack com React, TypeScript e JSON Server

Este é um projeto full-stack utilizando **React**, **TypeScript** e **JSON Server** para persistência de dados. A aplicação está configurada para rodar em dois terminais separados: um para o servidor do JSON Server e outro para o servidor de desenvolvimento do React.

## Pré-requisitos

Certifique-se de que o **Node.js** está instalado na sua máquina. Você pode baixar a versão mais recente [aqui](https://nodejs.org/).

### Passos para rodar o projeto

1. **Clone o repositório** para sua máquina local:

   ```bash
   git clone <URL-do-repositório>
   cd <diretório-do-projeto>
   ```

2. **Instale as dependências** do projeto:

   No diretório raiz do projeto, execute o seguinte comando para instalar as dependências tanto do frontend quanto do backend:

   ```bash
   npm install
   ```

3. **Inicie o JSON Server**:

   Abra um terminal e execute o comando abaixo para rodar o servidor do JSON Server, que estará disponível em `http://localhost:3001/`.

   ```bash
   npm run server
   ```

   Isso irá rodar o servidor em `http://localhost:3001/` e fornecer a API para a aplicação React.

4. **Inicie o servidor de desenvolvimento React**:

   Abra um **segundo terminal** e execute o seguinte comando para iniciar o servidor de desenvolvimento do React, que estará disponível em `http://localhost:3000/`.

   ```bash
   npm start
   ```

   Isso irá abrir a aplicação React no navegador em `http://localhost:3000/`.

---

## Scripts

- `npm run server`: Inicia o **JSON Server** na porta `3001`.
- `npm start`: Inicia o servidor de desenvolvimento do **React** na porta `3000`.

## Estrutura do Projeto

```
/node_modules       # Dependências instaladas
/public            # Arquivos públicos (index.html, etc.)
/src               # Código fonte do projeto React
  /components      # Componentes do React
  /hooks           # Funções
  /services        # Lógica de comunicação com o JSON Server
/db.json           # Arquivo de dados do JSON Server
/package.json      # Configurações do projeto
```

## Considerações

- O JSON Server usa o arquivo `db.json` para armazenar dados. Certifique-se de adicionar ou modificar os dados diretamente nesse arquivo para simular um banco de dados.
- Qualquer modificação no arquivo `db.json` pode exigir reiniciar o servidor do JSON Server para refletir as mudanças.