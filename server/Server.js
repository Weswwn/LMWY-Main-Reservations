const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/dbConnection.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get('/api/restaurants/:id/reviews', (req, res) => {
  const queryString = 'SELECT * from reviews where r_id = ?';
  db.connection.query(queryString, [req.params.id], (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
});
