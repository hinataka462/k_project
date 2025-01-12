FROM openjdk:17-jdk-slim
WORKDIR /app
COPY . .
RUN ./gradlew build -x test
ENTRYPOINT ["java", "-jar", "build/libs/webapp_02_sp04-0.0.1-SNAPSHOT.jar"]
