const Employee = require('../models/employee');

const getAllEmployees = async (request, response) => {
  try {
    const employees = await Employee.find();
    response.json({ employees });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createEmployee = async (request, response) => {
  try {
    const employeeName = request.body.employeeName;
    const employeeRole = request.body.employeeRole;
    const employeeNumber = request.body.employeeNumber;
    const employeeDepartment = request.body.employeeDepartment;
    const employeeSalary = request.body.employeeSalary;
    const employeeStartDate = request.body.employeeStartDate;
    const employeeEndDate = request.body.employeeEndDate;

    const employee = await Employee.create({
      employeeName,
      employeeRole,
      employeeNumber,
      employeeDepartment,
      employeeSalary,
      employeeStartDate,
      employeeEndDate,
    });
    response.json({ employee });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editEmployee = async (request, response) => {
  try {
    const employeeId = request.params.id;

    const employeeName = request.body.employeeName;
    const employeeRole = request.body.employeeRole;
    const employeeNumber = request.body.employeeNumber;
    const employeeDepartment = request.body.employeeDepartment;
    const employeeSalary = request.body.employeeSalary;
    const employeeStartDate = request.body.employeeStartDate;
    const employeeEndDate = request.body.employeeEndDate;

    await Employee.findOneAndUpdate(
      { _id: employeeId },
      {
        employeeName,
        employeeRole,
        employeeNumber,
        employeeDepartment,
        employeeSalary,
        employeeStartDate,
        employeeEndDate,
      }
    );
    const employee = await Employee.findById(employeeId);
    response.json({ employee });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteEmployee = async (request, response) => {
  try {
    const employeeId = request.params.id;
    await Employee.deleteOne({ _id: employeeId });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  editEmployee,
};
