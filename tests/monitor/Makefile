include .env
export

docker-build:
	docker build --file Dockerfile.Monitor -t $(image-name):$(image-version) .

docker-run:
	docker run -it $(image-name):$(image-version) --yaml=monitor.yaml

docker-push:
	docker push $(image-name):$(image-version)