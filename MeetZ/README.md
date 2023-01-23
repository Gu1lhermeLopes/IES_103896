# LAB 3

## Docker Installation

### Network

 ```bash
$ docker network create spring-sql
```

### MySQL

 ```bash
$ docker run --name mysqlnet --network spring-sql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=meetz -e MYSQL_USER=user -e MYSQL_PASSWORD=1234 -d mysql:5.7
```

### BackEnd
- in folder ```MeetingApp```
 ```bash
 #BUILD IMAGE
$ docker build -t backend-meetz .
 #RUN CONTAINER
$ docker run --network spring-sql --name backend-meetz-ct -p 8080:8080 -d backend-meetz
```

### FrontEnd
- in folder ```front```
 ```bash
 #BUILD IMAGE
$ docker build -t front-meetz .
 #RUN CONTAINER
$ docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true front-meetz
```





## 3.3 API EndPoints

| Method        | Path          | Description  |
| :------------- |:-------------| :-----:|
| POST     | api/add/movie | Create a new movie |
| POST     | api/add/quote/<movieId>      |   Add a quote to a existing movie |
| GET | api/all/movies      |    List all movies |
| GET | api/all/quotes      |    List all quotes |
| GET | api/quotes/<movieId>     |    Return a random quote for the <movieId>|
| GET | api/quotes      |    Return a random quote |
  
  

