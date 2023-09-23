const express = require('express');
const app = express();
const mongoose = require('mongoose');
const contactSchema = require('./models/contact');
const URI =
  'mongodb+srv://naaghart:naaghart@basic.lmmcjdd.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((error) => {
    console.log('Connect to DB:', error.message);
  });

//help express read json files
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
});

PORT = 1759;

app.listen(PORT, '127.0.0.1', function () {
  console.log('server is listening on ' + PORT);
});
