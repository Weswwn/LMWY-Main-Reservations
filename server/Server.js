const express = require('express');
const db = require('../db/dbConnection.js');

const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const queryString = 'INSERT INTO users(username, location, numberOfReviews) VALUES(?, ?, ?)';

db.connection.query(queryString, ['bob', 'San Francisco', 100]);
