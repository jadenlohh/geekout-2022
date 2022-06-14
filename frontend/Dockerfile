FROM node:alpine

LABEL author="Nabil Ridhwan"

WORKDIR /frontend

COPY . ./

RUN npm i

ENTRYPOINT [ "npm", "start" ]