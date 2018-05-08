.DEFAULT_GOAL := help

IMAGE_NAME = node-graphql
PROJECT_NAME = graphql
CONTAINER_NAME = server

test: ## Test project
	docker-compose -f docker-compose.test.yml run --rm test

test-restart: ## Test project
	docker-compose -f docker-compose.test.yml down
	make test

build:
	docker build -t jguillermo/api-test:latest ./docker/node

build-server: 
	docker build -t jguillermo/api-test:server ./docker/server

build-server-fake: 
	docker build -t jguillermo/api-test:server-fake ./docker/server-fake

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
