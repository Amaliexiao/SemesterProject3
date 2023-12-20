# SemesterProject3

Semester project for 3. semester software teknologies. We are creating a web interface conected to a OPC-UA server, that simulates beer production

_Start the application outside of docker_

- Install PostgreSQL
- Ensure that the resources/application.properties file has the correct database information
- Run the database/database/databaseScript.sql file
- Ensure that the node-server/db.js file has correct database login information
- Ensure that the OpcUaConfig class has correct ip, localhost for simulation, 192.168.0.122 for machine
- Start the SpringServer
- cd node-server
- npm install
- node server.js

_Start the docker-compose_

- In the server.js
- Comment out the db import and
- Uncomment the db-container import
- Open terminal and make sure you are in the project root
- `docker compose up`
- It should be running

- Known errors:
-       Ensure that your .env password, db-container.js password are the same
