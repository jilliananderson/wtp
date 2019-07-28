// import bodyParser from 'body-parser';
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const todos = ['Walk the dog', 'Wash the car', 'Buy an anniversary present'];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
})

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/todos', (req, res, next) => {
  res.send(todos);
});

// app.post('/todos', (req, res, next) => {
//   res.send('Post successful');
// })
// probably will not work until we can get the body parser in

app.listen(port, () =>
  console.log(`Listening on port ${port} | http://localhost:5000`)
);