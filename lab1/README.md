# LAB1
## Maven
create maven project:```mvn archetype:generate -DgroupId={groupID} -DartifactId={artifactId} -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false```


package project:	```mvn package```

compile project:	```mvn compile```

execute some class ```mvn exec:java -Dexec.mainClass="groupId.artifactId"```

## Docker
build a container ```docker build -t getting-started .```

run a container ```docker run -dp 3000:3000 getting-started```

open container in browser ```http://localhost:3000```

### Portainer

create a volume to store database ```docker volume create portainer_data```

download and install the Portainer container ```docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest```

open  ```https://localhost:9443``` and logging


## 1.5 Wrapping-up & integrating concepts
- create two differents maven projects
- add ``` <packaging>jar</packaging> ``` in pom.xml of API project
- package API project to create the .jar ```mvn package```
- add .jar to client project ```mvn install:install-file –Dfile={PATH.jarfile} -DgroupId={groupID} -DartifactId={artifactId} -Dversion={version} -Dpackaging=jar```
- add .jar as dependence in in pom.xml of Client project
```java
    <dependency>
      <groupId>IpmaApiClient</groupId>
	    <artifactId>IpmaApiClient</artifactId>
      <version>1.0-SNAPSHOT</version>
      <type>jar</type>
    </dependency>
```

## Review questions

### A)

```validate```	- validate the project is correct and all necessary information is available

 ```compile``` - compile the source code of the project

```test``` - test the compiled source code using a suitable unit testing framework. These tests should not require the code be packaged or deployed

```package``` - take the compiled code and package it in its distributable format, such as a JAR.

```verify``` - run any checks on results of integration tests to ensure quality criteria are met

```install``` - install the package into the local repository, for use as a dependency in other projects locally

```deploy``` - done in the build environment, copies the final package to the remote repository for sharing with other developers and projects

> https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html

### B) 
yes, maven can compile and run projects.

### C)
```
git clone <url repo>
*made the changes in project*
git add .
git commit -m "feature added"
git push
```
### D)
- short but helpful messages
- indentify especific changes

### E) 
Volumes have several advantages over bind mounts:
- Volumes are easier to back up or migrate than bind mounts.
- You can manage volumes using Docker CLI commands or the Docker API.
- Volumes work on both Linux and Windows containers.
- Volumes can be more safely shared among multiple containers.
- Volume drivers let you store volumes on remote hosts or cloud providers, to encrypt the contents of volumes, or to add other functionality.
- New volumes can have their content pre-populated by a container.
- Volumes on Docker Desktop have much higher performance than bind mounts from Mac and Windows hosts.
> https://docs.docker.com/storage/volumes/
