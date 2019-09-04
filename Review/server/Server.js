const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/dbConnection.js');

const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/restaurants/:id', express.static('public'));

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get('/api/restaurants/:id/reviews', (req, res) => {
  // console.log(req.params.id);
  const queryString = 'SELECT * from reviews JOIN users ON (reviews.r_id = ? AND reviews.u_id = users.user_id)';
  db.connection.query(queryString, [req.query.id], (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
});
