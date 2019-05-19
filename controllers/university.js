const University = require("../models/University");

// Return list of universities sorted alphabetically
exports.get = (req, res) => {
  University.find({}, null, { sort: { name: 1 } })
    .then(university => {
      res.json(university);
    })
    .catch(err => {
      res.status(422).send(err.errors);
    });
};
