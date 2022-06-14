# Can you hear me? (Backend)

# API Documentation

[Click here](https://documenter.getpostman.com/view/18153423/UzBgvA23) for the documentation of the API.

# Run the backend using Docker

1.  Make sure you have Docker desktop installed (I'm pretty sure its covered already, and you should've installed it already)
2.  **Build** the docker image by running `docker build -t geekout-2022-team-c .` _(Even though discrete, remember to add along the `.` at the back of the command)_
3.  **Run** the docker image by running `docker run -p 8080:3000 -d geekout-2022-team-c`
4.  Open the browser and go to http://localhost:8080
5.  Your response from the backend should be displayed in the browser (`"This is the home page"`)

## To stop the docker running instance (after you have finished)

1.  Get the ID of the running container by running `docker container ls`
2.  **Take note** of the "CONTAINER ID" for the running container (geekout-2022-team-c) (e.g. ac72cd470a5b)
3.  Stop the container by running `docker container stop <CONTAINER ID>` (e.g. `docker container stop ac72cd470a5b`)

To confirm that your container has successfully stopped

1.  Run `docker ps -a`
2.  The container should be stopped. Under the status column, you should see `Exited (0)` or `Exited (1)`.
