FROM nginx:alpine
COPY . /html
docker build -t html-server-image:v1
docker images

