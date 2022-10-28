# LAB 3

## 3.2 exposing data with REST interface

create a MySQL server's instance using [Docker container](https://hub.docker.com/_/mysql)

 ```bash
$ docker run --name mysql5 -e MYSQL_ROOT_PASSWORD=secret1 -e MYSQL_DATABASE=demo -e MYSQL_USER=demo -e MYSQL_PASSWORD=secret2 -p 33060:3306 -d mysql/mysqlserver:5.7
```

create a project Spring Boot with next dependencies
- Spring Web
- Spring Data JPA
- MySQL driver
- DevTools
- Validation

Follow this [tutorial](https://www.javaguides.net/2018/09/spring-boot-2-jpa-mysql-crud-example.html)

Define database in **application.properties** file
 ```bash
# MySQL
spring.datasource.url=jdbc:mysql://127.0.0.1:33060/demo
spring.datasource.username=demo
spring.datasource.password=secret2
spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
# Strategy to auto update the schemas (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto = update
```


## 3.3 Random quote API 2.0
procedure quite similar to 3.2

| Method        | Path          | Description  |
| :------------- |:-------------| :-----:|
| POST     | api/add/movie | Create a new movie |
| POST     | api/add/quote/<movieId>      |   Add a quote to a existing movie |
| GET | api/all/movies      |    List all movies |
| GET | api/all/quotes      |    List all quotes |
| GET | api/quotes/<movieId>     |    Return a random quote for the <movieId>|
| GET | api/quotes      |    Return a random quote |
  
  
## Review questions

#### @RestController vs @Controller
#### UML diagram
#### @Table @Colum @Id
#### @Autowired
  - is using to mark a depe
