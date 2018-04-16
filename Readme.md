Testing e2e
===========

Aplicación para correr pruebas e2e en APIS rest

docker-compose.test.yml
```yml
version: '2'
services:
  server:
    image: jguillermo/api-test:server
    ports:
      - 8056:8056
  test:
    image: jguillermo/api-test:latest
    volumes:
      - ./app/e2e:/app/e2e
    depends_on:
       - server
    command: "/tmp/wait-for-it.sh server:8056 -t 5 -- npm test"
```

run
---
```bash
docker-compose -f docker-compose.test.yml run --rm test
```
run
---
```bash
make test
```

Config
-----
./e2e/request/config.js
```js
process.env.HOST = 'http://server:8056';
```