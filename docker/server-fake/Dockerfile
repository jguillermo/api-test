FROM node:9.11.1-slim

COPY ./package.json /app/package.json
COPY ./server.js /app/server.js
COPY ./credencial/server.csr /app/credencial/server.csr
COPY ./credencial/server.key /app/credencial/server.key

RUN cd /app && yarn install

WORKDIR /app
EXPOSE 80 443

CMD [ "npm", "start" ]