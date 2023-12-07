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

CREATE TABLE Temperatures(
    id          SERIAL PRIMARY KEY,
    batchId     INTEGER REFERENCES Batches(id),
    temp        FLOAT NOT NULL
);

CREATE TABLE Humidities(
    id          SERIAL PRIMARY KEY,
    batchId     INTEGER REFERENCES Batches(id),
    humidity    FLOAT NOT NULL
);

CREATE TABLE Vibrations(
    id          SERIAL PRIMARY KEY,
    batchId     INTEGER REFERENCES Batches(id),
    vibration   FLOAT NOT NULL
);

CREATE TABLE Batches
(
    id              SERIAL PRIMARY KEY,
    userId          INTEGER,
    size            INTEGER NOT NULL,
    beertype        INTEGER REFERENCES Beers (id),
    speed           INTEGER NOT NULL,
    startTime       TIMESTAMP,
    stopTime        TIMESTAMP,
    successfulBeers INTEGER,
    failedBeers     INTEGER
);

INSERT INTO Users (email, username, password)
VALUES ('test@mail.com', 'Test', 'Test1234');