﻿# EventHandler

The project is an Angular + Spring Boot application designed for managing events. Its primary functionalities include adding new events, modifying existing ones.

## Technologies
* <a href="https://v17.angular.io/docs" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/angular-icon.svg" height="25" /> Angular </a>
* <a href="https://www.typescriptlang.org/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/typescript-icon.svg" height="25" /> TypeScript </a>
* <a href="https://www.java.com/en/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/java.svg" height="25" /> Java </a>
* <a href="https://spring.io/projects/spring-boot" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/spring.svg" height="25" /> Spring Boot </a>
* <a href="https://www.postgresql.org/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/postgresql.svg" height="25" /> PostgreSQL </a>

## Prerequisites

**Node.js and npm:** You can download and install Node.js from the [official website](https://nodejs.org/en/download/) or use a package manager for your operating system.<br><br>
**Angular CLI:** You can find the guide [here](https://v17.angular.io/cli). <br><br>
**Java Development Kit (JDK):** You can download it from the [official website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) and follow the installation instructions.<br><br>
**Maven:** You can download it from the [official website](https://maven.apache.org/download.cgi) and follow the installation instructions.<br><br>


## Setup

- Clone the repository <br>
```
git clone git@github.com:DoraDru/EventHandler.git
```

## Server side

```
cd ./backend
```

- Install dependencies

- Set Up the Database

Create a new database instance in your SQL database.

Configure the database connection details and set your environment variables.<br>
 `DB_URL`: URL for accessing the SQL database.<br>
 `DB_USERNAME`: Username for accessing the database.<br>
 `DB_PASSWORD`: Password for accessing the database.<br>
 `JWT_EXPIRATION`: Expiration time for the JWT token.<br>
 `JWT_SECRET`: JWT secret is used by the server to sign the token during its creation.<br>

- Start the backend

```
mvn spring-boot: run
```

The application should be available at http://localhost:8080.
 

## Client side

### Install dependencies

```bash
cd ./frontend
npm install
```

### Proxy

Watch for the port of your rest api. By default it will bind on port 8080 and the frontend proxy settings also depend on this configuration. If you for some reasons change the port of the backend, don't forget to change the ./frontend/proxy.conf.json proxy settings as well.

### Runnig the code

```bash
cd ./frontend
ng serve
```

And the frontend will start on the 4200 port and you can visit the http://localhost:4200/ on your preferred browser.
