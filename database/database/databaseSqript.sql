-- If this is the first time running the script unmark create database
-- CREATE DATABASE "beerMachineDatabase";
DROP SCHEMA IF EXISTS beerMachine CASCADE;
CREATE SCHEMA beerMachine;
SET SEARCH_PATH TO beerMachine;
CREATE TABLE Beers (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Speeds (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    speed INTEGER NOT NULL
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email varchar(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Batches (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES Users(id),
    beerId INTEGER REFERENCES Beers(id),
    speedId INTEGER REFERENCES Speeds(id),
    size INTEGER NOT NULL,
    startTime TIMESTAMP NOT NULL,
    stopTime TIMESTAMP NOT NULL,
    heldStateDuration FLOAT NOT NULL,
    successfulBeers INTEGER NOT NULL,
    failedBeers INTEGER NOT NULL,
    lowersTemp FLOAT NOT NULL,
    meanTemp FLOAT NOT NULL,
    highestTemp FLOAT NOT NULL,
    lowersHum FLOAT NOT NULL,
    meanHum FLOAT NOT NULL,
    highestHum FLOAT NOT NULL,
    lowersVib FLOAT NOT NULL,
    meanVib FLOAT NOT NULL,
    highestVib FLOAT NOT NULL
);

INSERT INTO Users (email, username, password) VALUES ('test@mail.com','Test', 'Test1234');
INSERT INTO Beers (name) VALUES ('Pilsner');
INSERT INTO Speeds (name, speed) VALUES ('Sygt hurtig', 100);
INSERT INTO Batches (userId, beerId, speedId, size, startTime, stopTime, heldStateDuration, successfulBeers, failedBeers, lowersTemp, meanTemp, highestTemp, lowersHum, meanHum, highestHum, lowersVib, meanVib, highestVib) VALUES (1, 1, 1, 130, '2017-07-23",  "13:10:11', '2017-07-23",  "13:10:11', 3, 100, 30, 3, 3, 3, 2, 2, 2, 1, 1, 1);
