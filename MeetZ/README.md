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
| GET     | api/meetings/date | List meetings by date |
| GET     | api/meetings/date/{start}/{end} | List meetings between dates |
| GET     | api/meetings/{id} | Return meeting |
| GET     | api/meetings/{id}/c | Return meeting contacts |
| GET     | api/contacts | List contacts |
| PUT     | api/meetings/{id}/{contactId} | Add contact to meeting |
| PUT     | api/meetings/{id}/{contactId}/r | Remove contact from meeting |
| POST     | api/contacts/add | Add contacts |
| POST     | api/meetings/add | Add meetings |
| POST     | api/meetings/{id}/duplicate | Clone meeting |
| DELETE     | api/meetings/{id}/delete | Delete meeting |
| DELETE     | api/contacts/{id}/delete | Delete contact |


  
  

