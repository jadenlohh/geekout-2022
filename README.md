# Can you hear me? (Backend)

# API Documentation

[Click here](https://documenter.getpostman.com/view/18153423/UzBgvA23) for the documentation of the API.

# Run it using Docker compose

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
