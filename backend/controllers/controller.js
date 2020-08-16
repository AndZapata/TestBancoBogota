const db = require("../models");
const Person = db.person;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!",
    });
    return;
  }

  const birth = new Date(req.body.birth);
  // Create a Tutorial
  const person = {
    name: req.body.name,
    birth,
  };

  // Save Tutorial in the database
  Person.create(person)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person.",
      });
    });
};

exports.findAll = (req, res) => {
  Person.findAll({ where: { "active/inactive": true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving name.",
      });
    });
};

exports.findOne = (req, res) => {
  const personId = req.params.person_id;

  Person.findByPk(personId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Person with id=${personId}`,
      });
    });
};

exports.update = (req, res) => {
  const personId = req.params.id;

  Person.update(req.body, {
    where: { person_id: personId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Person was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Person with id=${personId}. Maybe Person was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Person with id=${personId}`,
      });
    });
};

exports.delete = (req, res) => {
  const personId = req.params.id;

  Person.update(
    { "active/inactive": false },
    {
      where: { person_id: personId },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Person was deleted successfully.",
        });
      } else {
        res.send({
          message: `Cannot delete Person with id=${personId}. Maybe Person was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error deleting Person with id=${personId}`,
      });
    });
};
