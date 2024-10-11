# Fabrica de carro

|Tecnologia|Descrição|
|-|-|
|Node.js|Framework para o back-end, servidor de aplicação|
|JS|Linguagem de programação|
|HTML5|Linguagem de marcação|
|CSS3|Linguagem de estilização|
|Prisma|ORM para Node.js|
|MySQL MariaDB|Banco de dados|

## Como executar este projeto !
- 0 Copie o endereço de URL para baixar o repositório
- 1 Clone este repositório
- 2 Abrir com o Visual Studio Code e abrir um terminal cmd ou bash
- 3 Use `cd fabricadecarro` `cd api` para entrar na pasta api
- 4 Instalar as dependências com o comando `npm install`
- 5 Criar um arquivo `.env` na pasta api do projeto e adicionar as variáveis de ambiente
```js
DATABASE_URL="mysql://root:@localhost:3306/fabrica"
```
- 6 Executar as migrations com o comando `npx prisma migrate dev --name init`
- 7 Execute o comando `npm run seed` para importar os dados para o banco
- 8 Iniciar o servidor com o comando `npx nodemon`
- 9 Executar o arquivo `./Front/HTML/principal.html` no navegador ou com live server
- 10 Agora é so testar !