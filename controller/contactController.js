const Contact = require('../models/contact');

const getAllContacts = async (request, response) => {
  try {
    const contacts = await Contact.find();
    response.json({ contacts });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createContact = async (request, response) => {
  try {
    const { contactName, contactEmail, contactNumber, contactGroup } =
      request.body;

    const contact = await Contact.create({
      contactName,
      contactEmail,
      contactNumber,
      contactGroup,
    });
    response.json({ contact });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editContact = async (request, response) => {
  try {
    const contactId = request.params.id;
    const { contactName, contactEmail, contactNumber, contactGroup } =
      request.body;

    await Contact.findByIdAndUpdate(
      { _id: contactId },
      {
        contactName,
        contactEmail,
        contactNumber,
        contactGroup,
      }
    );
    //find updated
    const contact = await Contact.findById(contactId);
    //return updated
    response.json({ contact });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteContact = async (request, response) => {
  try {
    const contactId = request.params.id;
    await Contact.deleteOne({ _id: contactId });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllContacts,
  createContact,
  deleteContact,
  editContact,
};
