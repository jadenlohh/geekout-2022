FROM node:alpine

LABEL author="Nabil Ridhwan"

WORKDIR /backend

COPY . ./

RUN npm i

ENTRYPOINT [ "npm", "start" ]