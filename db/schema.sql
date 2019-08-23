DROP DATABASE reviewDB;

CREATE DATABASE IF NOT EXISTS reviewDB;

USE reviewDB;

CREATE TABLE IF NOT EXISTS users (
    user_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(30) NOT NULL,
    location TEXT NOT NULL,
    numberOfReviews int NOT NULL,
    profilePicture LONGBLOB
);

CREATE TABLE IF NOT EXISTS reviews (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    overallRating int NOT NULL,
    foodRating int NOT NULL,
    serviceRating int NOT NULL,
    ambienceRating int NOT NULL,
    comment TEXT NOT NULL,
    u_id int NOT NULL,
    FOREIGN KEY (u_id)
        REFERENCES users (user_id) ON DELETE CASCADE
);

