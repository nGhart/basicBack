const Transaction = require('../models/transaction');

const getAllTransactions = async (request, response) => {
  try {
    const transactions = await Transaction.find();
    response.json({ transactions });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const getSingleTransaction = async (request, response) => {
  try {
    const transactionId = request.params.id;
    const transaction = await Transaction.findOne({
      _id: transactionId,
    });
    response.json({ transaction });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createTransaction = async (request, response) => {
  try {
    const name = request.body.name;
    const category = request.body.category;
    const price = request.body.price;
    const payment = request.body.payment;
    const transactionType = request.body.transactionType;
    const date = request.body.date;

    const transaction = await Transaction.create({
      name,
      category,
      price,
      payment,
      transactionType,
      date,
    });
    response.json({ transaction });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editTransaction = async (request, response) => {
  try {
    //get ID
    const transactionId = request.params.id;
    //get data
    const name = request.body.name;
    const category = request.body.category;
    const price = request.body.price;
    const payment = request.body.payment;
    const transactionType = request.body.transactionType;
    const date = request.body.date;
    //update
    await Transaction.findOneAndUpdate(
      { _id: transactionId },
      {
        name,
        category,
        price,
        payment,
        transactionType,
        date,
      }
    );
    //find updated
    const transaction = await Transaction.findById(transactionId);
    //return updated
    response.json({ transaction });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteTransaction = async (request, response) => {
  try {
    const transactionId = request.params.id;
    await Transaction.deleteOne({ _id: transactionId });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllTransactions,
  createTransaction,
  editTransaction,
  deleteTransaction,
};
