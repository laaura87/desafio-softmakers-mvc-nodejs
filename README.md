# SoftMakers Contatos

Contact management web system.

Challenge proposed by [SoftMakers](https://github.com/BrSoftMakers/challenge-fullstack-developer) as a criterion for the selection process.

## Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Knex.js](http://knexjs.org/)

Project made using [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) architecture.

## Getting started

### **Server**

Create a copy of `.env.example` file and name it `.env`, so fill it with the database credentials

Install the dependencies running the following commands

```
yarn install
```

Run the database migrations

```
yarn knex migrate:latest
```

Finally, run the project

```
yarn start
```

Development server will be running in the [http://localhost:3050](http://localhost:3050)

## Desafios/problemas encontrados durante a realização do projeto

Esse projeto foi menos desafiador que o de PHP, pois já tenho familiaridade com node.js e a template engine utilizada no projeto, o nunjucks. O único desafio mesmo foi o upload de fotos que eu ainda não tinha feito usando o 'html puro'.

## License

This project is MIT licensed.
