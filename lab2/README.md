# LAB2
## 2.1 Servlet Container - Apache Tomcat
### Setup
Just download (Tomcat v9 → core → zip) and expand to a local folder and run startup script.

Register one role in ```conf/tomcat-users.xml``` to access Manager App

Build the project ```mvn install```

Now we have a .war file in /target

Deploy the file into the aplication server


Confirm server in running: ```curl -I 127.0.0.1:8080```

## 2.2 Embedded servers - Jetty

## 2.3 Spring Boot
- create maven-supported Spring Boot project in [Spring Initializr](https://start.spring.io/).
- run application ```./mvnw spring-boot:run```

- Tutorial first project [Spring Boot](https://start.spring.io/).
- Tutorial REST Web Service project [Spring Boot](https://spring.io/guides/gs/rest-service/).

- [Some Spring Boot annotations](https://www.upgrad.com/blog/spring-boot-annotations/).




2.3 b) lab2_3/demo

2.3 c) lab2_3/app

## 2.4 REST API
After some search decide use [JpaRepository](https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html) 

in folder ```src/rest/api/```
 - ```ApiApplication.java``` main
 - ```Show.java``` class Show
 - ```ShowRepository.java``` interface JpaRepository
 - ```Controller.java``` return the request data
 
 in folder ```src/rest/api/service```
  - ```ShowService.java``` interface database management
  - ```ShowServiceImpl.java``` Implementation of ShowService
*********
## Review questions

#### What are the responsibilities/services of a “servlet container”?
  - Multithreaded support, Life Cycle Management
  
  
#### Explain, in brief, the “dynamics” of Model-View-Controller approach used in Spring Boot to server web content.
  - Model contains the data of aplication
  - Controller manegement the app
  - View is the information neededto create a view page

  
#### 3 What is the role of the “starters”dependencies?
  - Decreasing configuration time
  - Decreasing the number of dependencies make easier POM managing

  
#### 4 Which annotations are transitively included in the @SpringBootApplication?
  - @Configuration
  - @EnableAutoConfiguration 
  - @ComponentScan

#### 5 Best practices for REST API design
  - REST API must accept and respond with JSON
    >JSON can be used by any language, it's easy to use and read.
    
  - Not use verbs in URLs but nouns
      > URL shold be short and elegant,this prevents mistakes when trying to recode it
  
  - Use plural names to collections
      > It's easier to understand the meaning of collection
  
  - Return error details in response body
      > It's easier for debugging
  
  - Use filtering and sorting to return requested data 
    > Sometimes read a database is slow, so if we filter the data will be faster
