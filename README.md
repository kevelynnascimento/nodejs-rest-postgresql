## Description

Base API

## Support

Kevelyn Nascimento <a href="https://www.linkedin.com/in/zhdruvo" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Kevelyn Nascimento


## **Struct generation**

**Migration**

```bash
$ typeorm migration:create src/migrations/{table-name}/{table-name}-{action}
```

**Build docker**

```bash
$ docker build -t base-api-migrations .

$ docker run -p 5003:5003 base-api-migrations

$ docker save -o base_api_migrations.tar base-api-migrations

$ docker load -i base_api_migrations.tar

$ docker run -p 5003:5003 base_api-migrations
```