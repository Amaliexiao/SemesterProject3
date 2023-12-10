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

CREATE TABLE completed_batches
(
    id                SERIAL PRIMARY KEY,
    userid            INTEGER REFERENCES Users (id),
    beertype           INTEGER REFERENCES Beers (id),
    speed             INTEGER   NOT NULL,
    size              INTEGER   NOT NULL,
    start_time         TIMESTAMP,
    stop_time          TIMESTAMP,
    heldStateDuration FLOAT,
    successful_beers   INTEGER ,
    failed_beers       INTEGER
);

CREATE TABLE Temperature(
    id SERIAL PRIMARY KEY,
    batch_id INTEGER REFERENCES completed_batches (id),
    Temperature float NOT NULL
);

CREATE TABLE Humidity(
    id SERIAL PRIMARY KEY,
    batch_id INTEGER REFERENCES completed_batches (id),
    Humidity float NOT NULL
);

CREATE TABLE Vibration(
    id SERIAL PRIMARY KEY,
    batch_id INTEGER REFERENCES completed_batches (id),
    Vibration float NOT NULL
);

CREATE TABLE Batches
(
    id       SERIAL PRIMARY KEY,
    userId   INTEGER,
    size     INTEGER NOT NULL,
    beertype INTEGER REFERENCES Beers (id),
    speed    INTEGER NOT NULL
);

INSERT INTO Users (email, username, password)
VALUES ('test@mail.com', 'Test', 'Test1234');