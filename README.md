## HOW TO START APP:

```

cd Dockerized-Node-Mysql-API

sudo docker rmi $(docker images -f dangling=true)

sudo docker rm -f $( docker ps -a -q)

sudo docker build . --tag node-mysql

sudo docker run --name node-mysql -p 3306:3306 -it node-mysql


```
