# Easyroll

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Global Dependencies

### NPM
1. Follow the [Install Guide](https://blog.teamtreehouse.com/install-node-js-npm-linux)

### Angular 7
1. run `npm install -g @angular/cli`
2. Read the [Quick Start Guide](https://angular.io/guide/quickstart)

### Docker
1. Follow the [Install Instructions](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

### Serverless
1. run `npm i serverless -g`

## Project setup

This project encompasses the front and backend system for the employee payroll. To start up the project, follow the following instructions.

================================================================================
### BACKEND
================================================================================
1. Open and start docker on your machine
2. Navigate into /db and run `npm install`
3. Still in the /db directory, and run `npm run images:up` in Terminal 1
4. Once step 3 is complete, run `npm run db:init` in the same directory
5. Finally, in the same directory, once step 4 is complete, run `npm run api:up`

You should be able to access the database on localhost:8080.
- username: admin
- password: password
- database: easyroll
- dialect: PostgreSQL
================================================================================
### FRONTEND
================================================================================
1. Navigate into the root folder and run `npm install`
2. Run `npm run start` once the installation is complete
3. Visit `http://localhost:4200` to interact with the frontend

The following credentials (on by default) should let you access the employee list
- username: abc
- password: xyz

## Tests
### Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
