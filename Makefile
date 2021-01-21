include .env
export

docker-build:
	docker build -t $(image-name):$(image-version) .

docker-run:
	docker run -p 3000:3000 -it $(image-name):$(image-version)

docker-push:
	docker push $(image-name):$(image-version)

kube-apply:
	gcloud container clusters get-credentials $(cluster-name) --project $(project-name) --region $(region)
	kubectl apply --recursive -f ./k8s

kube-delete:
	kubectl delete deployment -l app=next
	kubectl delete service -l app=next
	kubectl delete ingress -l app=next