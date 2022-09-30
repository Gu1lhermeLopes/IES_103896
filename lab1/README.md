# LAB1
## Maven
create maven project:```mvn archetype:generate -DgroupId={groupID} -DartifactId={artifactId} -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false```


package project:	```mvn package```

compile project:	```mvn compile```

execute some class ```mvn exec:java -Dexec.mainClass="groupId.artifactId"```

## Docker


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

A)
validate	
initialize
compile
test
package
verify	
install	
deploy

B) yep, maven can compile and run projects.

C)
```
git clone <url repo>
*made the changes in project*
git add .
git commit -m "feature added"
git push
```
D)
short but helpful messages
indentify especific changes

E) Because database can easily reach to a huge scale that needs more data
