const University = require("../models/University");

exports.get = (req, res) => {
  University.find()
    .then(university => {
      res.json(university);
    })
    .catch(err => {
      res.status(422).send(err.errors);
    });
};
