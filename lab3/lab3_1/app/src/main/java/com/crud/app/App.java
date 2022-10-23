package com.crud.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication 
@EnableAutoConfiguration
@ComponentScan(basePackages={"com.crud.app"})
@EnableJpaRepositories(basePackages="com.crud.app.repository")
@EnableTransactionManagement
@EntityScan(basePackages="com.crud.app.entity")
public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

}