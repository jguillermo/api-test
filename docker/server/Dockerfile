FROM node:9.11.1-slim

COPY ./package.json /app/package.json
COPY ./server.js /app/server.js
COPY ./request.js /app/request.js

RUN cd /app && yarn install

WORKDIR /app
EXPOSE 8056

CMD [ "npm", "start" ]