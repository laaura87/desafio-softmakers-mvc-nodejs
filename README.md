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
yarn knex:migrate
```

Finally, run the project

```
yarn start
```

Development server will be running in the [http://localhost:3050](http://localhost:3050)

## License

This project is MIT licensed.
