const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/dbConnection.js');

const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// console.log(dataGenerator.genUserData());

app.get('/api/restaurants/:id/reviews', (req, res) => {
  const queryString = 'SELECT * from reviews where r_id = ?';
  db.connection.query(queryString, [req.params.id], (error, results, fields) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
});
