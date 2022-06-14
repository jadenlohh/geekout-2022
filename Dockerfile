FROM node:alpine

LABEL author="Nabil Ridhwan"

ENV NODE_ENV production
ENV PORT 4000

WORKDIR /app

COPY . ./

RUN npm i

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]