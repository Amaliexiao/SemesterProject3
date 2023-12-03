# FROM maven:3.8.2-jdk-8 # for Java 8
FROM maven:latest

WORKDIR /backend
COPY . .
RUN mvn clean install

CMD mvn spring-boot:run