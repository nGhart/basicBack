const express = require('express');
const cors = require('cors');
const app = express();
//const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectToDb = require('./config/connectToDb');
const contactController = require('./controller/contactController');
const animalController = require('./controller/animalController');
const diseaseController = require('./controller/diseaseController');
const transactionController = require('./controller/transactionController');
const invoiceController = require('./controller/invoiceController');
const employeeController = require('./controller/employeeController');
const feedController = require('./controller/feedController');
const inventoryController = require('./controller/inventoryController');
const matingController = require('./controller/matingController');
const medController = require('./controller/medController');
const quarantineController = require('./controller/quarantineControllers');
const vaccinationController = require('./controller/vaccinationController');
const profileController = require('./controller/profileController');

app.use(express.json());
//app.use(cors());

app.use(
  cors({
    origin: [
      '*',
      
      'https://recordsfrontend.vercel.app',
    ],
    credentials: true,
  })
);

dotenv.config();

connectToDb();

app.get('/contacts', contactController.getAllContacts);
app.post('/contacts', contactController.createContact);
app.put('/contacts/:id', contactController.editContact);
app.delete('/contacts/:id', contactController.deleteContact);

app.get('/animals', animalController.getAllAnimals);
app.post('/animals', animalController.createAnimal);
app.put('/animals/:id', animalController.editAnimal);
app.delete('/animals/:id', animalController.deleteAnimal);

app.get('/transactions', transactionController.getAllTransactions);
app.post('/transactions', transactionController.createTransaction);
app.put('/transactions/:id', transactionController.editTransaction);
app.delete('/transactions/:id', transactionController.deleteTransaction);

app.get('/invoices', invoiceController.getAllInvoices);
app.post('/invoices', invoiceController.createInvoice);
app.put('/invoices/:id', invoiceController.editInvoice);
app.delete('/invoices/:id', invoiceController.deleteInvoice);

app.get('/contacts', contactController.getAllContacts);
app.post('/contacts', contactController.createContact);
app.put('/contacts/:id', contactController.editContact);
app.delete('/contacts/:id', contactController.deleteContact);

app.get('/employees', employeeController.getAllEmployees);
app.post('/employees', employeeController.createEmployee);
app.put('/employees/:id', employeeController.editEmployee);
app.delete('/employees/:id', employeeController.deleteEmployee);

app.get('/feeds', feedController.getAllFeeds);
app.post('/feeds', feedController.createFeed);
app.put('/feeds/:id', feedController.editFeed);
app.delete('/feeds/:id', feedController.deleteFeed);

app.get('/profiles', profileController.getAllProfiles);
app.post('/profiles', profileController.createProfile);
app.put('/profiles/:id', profileController.editProfile);
app.delete('/profiles/:id', profileController.deleteProfile);

app.get('/inventories', inventoryController.getAllInventories);
app.post('/inventories', inventoryController.createInventory);
app.put('/inventories/:id', inventoryController.editInventory);
app.delete('/inventories/:id', inventoryController.deleteInventory);

app.get('/diseases', diseaseController.getAllDiseases);
app.post('/diseases', diseaseController.createDisease);
app.put('/diseases/:id', diseaseController.editDisease);
app.delete('/diseases/:id', diseaseController.deleteDisease);

app.get('/matings', matingController.getAllMatings);
app.post('/matings', matingController.createMating);
app.put('/matings/:id', matingController.editMating);
app.delete('/matings/:id', matingController.deleteMating);

app.get('/meds', medController.getAllMeds);
app.post('/meds', medController.createMed);
app.put('/meds/:id', medController.editMed);
app.delete('/meds/:id', medController.deleteMed);

app.get('/quarantines', quarantineController.getAllQuarantines);
app.post('/quarantines', quarantineController.createQuarantine);
app.put('/quarantines/:id', quarantineController.editQuarantine);
app.delete('/quarantines/:id', quarantineController.deleteQuarantine);

app.get('/vaccinations', vaccinationController.getAllVaccinations);
app.post('/vaccinations', vaccinationController.createVaccination);
app.put('/vaccinations/:id', vaccinationController.editVaccination);
app.delete('/vaccinations/:id', vaccinationController.deleteVaccination);

app.get('/', (req, res) => {
  res.send('hello');
});

PORT = 5000;

app.listen(PORT, function () {
  console.log('server is listening on ' + PORT);
});
