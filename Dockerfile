FROM node:alpine as omranmodern-app

RUN apk update && apk add --no-cache make git

WORKDIR /app

COPY OmranModern-App/package*.json  /app/

RUN npm install @angular/cli -g \
    && npm ci

COPY OmranModern-App /app

EXPOSE 4201