const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const contactController = require('./controller/contactController');

//help express read json files
app.use(express.json());
app.use(cors());

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

app.get('/contacts', contactController.getAllContacts);
app.post('/contacts', contactController.createContact);
app.put('/contacts/:id', contactController.editContact);
app.delete('/contacts/:id', contactController.deleteContact);

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
});

PORT = 1759;

app.listen(PORT, '127.0.0.1', function () {
  console.log('server is listening on ' + PORT);
});
