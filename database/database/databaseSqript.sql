-- If this is the first time running the script unmark create database
-- CREATE DATABASE "beerMachineDatabase";
DROP SCHEMA IF EXISTS beerMachine CASCADE;
CREATE SCHEMA beerMachine;
SET SEARCH_PATH TO beerMachine;
CREATE TABLE Beers
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Users
(
    id       SERIAL PRIMARY KEY,
    email    varchar(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255)        NOT NULL
);

CREATE TABLE Batches
(
    id                SERIAL PRIMARY KEY,
    userId            INTEGER REFERENCES Users (id),
    beerId            INTEGER REFERENCES Beers (id),
    speed             INTEGER   NOT NULL,
    size              INTEGER   NOT NULL,
    startTime         TIMESTAMP NOT NULL,
    stopTime          TIMESTAMP NOT NULL,
    heldStateDuration FLOAT     NOT NULL,
    successfulBeers   INTEGER   NOT NULL,
    failedBeers       INTEGER   NOT NULL,
    lowTemp           FLOAT     NOT NULL,
    meanTemp          FLOAT     NOT NULL,
    highTemp          FLOAT     NOT NULL,
    loweHum           FLOAT     NOT NULL,
    meanHum           FLOAT     NOT NULL,
    highHum           FLOAT     NOT NULL,
    lowVib            FLOAT     NOT NULL,
    meanVib           FLOAT     NOT NULL,
    highVib           FLOAT     NOT NULL
);

CREATE TABLE QueuedBatches
(
    id       SERIAL PRIMARY KEY,
    userId   INTEGER,
    size     INTEGER NOT NULL,
    beertype INTEGER REFERENCES Beers (id),
    speed    INTEGER NOT NULL
);

INSERT INTO Users (email, username, password)
VALUES ('test@mail.com', 'Test', 'Test1234');