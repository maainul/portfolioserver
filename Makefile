.PHONY :  dbuild portfolio

docker build -t my-portfolio-server-image .
docker run -d --name my-portfolio-server -p 8080:8080 my-portfolio-server-image --restart unless-stopped
