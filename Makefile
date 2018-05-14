.DEFAULT_GOAL := help

IMAGE_NAME = node-graphql
PROJECT_NAME = graphql
CONTAINER_NAME = server

test: ## Test project
	docker-compose -f docker-compose.test.yml run --rm test

test-restart: ## Test project
	docker-compose -f docker-compose.test.yml down
	make test

build: ## build image node
	docker build -t jguillermo/api-test:latest ./docker/node

build-server: ## build image server
	docker build -t jguillermo/api-test:server ./docker/server

build-server-fake: ## build image server fake
	docker build -t jguillermo/api-test:server-fake ./docker/server-fake

jenkins: ## load jenkins
	docker run -p 8080:8080 -p 50000:50000 -v /var/run/docker.sock:/var/run/docker.sock -v $(PWD)/jenkins_home:/var/jenkins_home jenkins/jenkins:lts

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
