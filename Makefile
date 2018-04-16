.DEFAULT_GOAL := help

IMAGE_NAME = node-graphql
PROJECT_NAME = graphql
CONTAINER_NAME = server

test: ## Test project
	docker-compose -f docker-compose.test.yml down
	docker-compose -f docker-compose.test.yml run --rm test

test-ligth: ## Test project
	docker-compose -f docker-compose.test.yml run --rm test

build: 
	cp ./app/package.json ./docker/node/package.json
	docker build -t jguillermo/api-test:latest ./docker/node

build-server: 
	docker build -t jguillermo/api-test:server ./docker/server

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
