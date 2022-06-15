# Can you hear me?

# API Documentation

[Click here](https://documenter.getpostman.com/view/18153423/UzBgvA23) for the documentation of the API.

# Development - Application

To start developing, run:

-   `npm install` to install all dependencies
-   `npm start` to start the express application (from the root folder)
-   `npm start` to run the react application (from the **frontend** folder)

# Development - Database

To develop the application, you have two choices for database

1.  Connect to the cloud database
2.  Connect to the local database (using Docker)

## 1. Connecting to cloud database (Be careful, more chance to break something because its in the cloud!)

To connect to the cloud database, head over to `app.js` and comment line 23 and uncomment line 24. It should look something like this:

```js
// const uri = "mongodb://root:root@localhost:27017";
const uri =
    "mongodb+srv://Admin:lAf8JiPQynG0mCGm@cluster0.vobnv.mongodb.net/?retryWrites=true&w=majority";
```

All data will be synced to the cloud database when using the application.

## 2. Connecting to local database (All database files are stored in the `/data/mongo` folder)

To connect to the local database (managed by docker), head over to `app.js` and comment line 24 and uncomment line 23. It should look something like this:

```js
const uri = "mongodb://root:root@localhost:27017";
// const uri = "mongodb+srv://Admin:lAf8JiPQynG0mCGm@cluster0.vobnv.mongodb.net/?retryWrites=true&w=majority";
```

After that you have to start the docker containers. You need to run these commands:

```
docker compose up --build mongo mongo-express
```

This will open two ports for development purposes (Local Database)

-   `27017`: for the local database (mongo)
-   `8081`: for mongo express (Web interface to view data of the mongo database)
    -   ![](./docs/mongo-express.png)

### Persistance

Don't worry, the data is stored in the `/data/mongo` folder and persisted in the local database even after the docker containers are closed/restarted.

### SHUT DOWN THE DOCKER CONTAINERS

1. Run `docker-compose down` and it should then stop the container(s).

# Run it using Docker compose (for production/staging)

> With my very little knowledge on Docker and Docker Compose, I hope that these commands will work
>
> -- <cite>Nabil</cite>

## Instructions

1.  **Make sure you have Docker desktop installed** (I'm pretty sure its covered already, and you should've installed it already)
2.  **Build and Run** the docker container by running `docker-compose up --build -d`
3.  Open the browser and go to [here](http://localhost:3001).
4.  Your response from the backend should be displayed in the browser (`"This is the home page"`)

## To stop the docker container from continuously running

These Docker container does not stop automatically and you need to shut them down

1. Run `docker-compose down` and it should then stop the container(s).
