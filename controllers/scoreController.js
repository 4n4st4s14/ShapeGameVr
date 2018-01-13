const db = require('../models');

module.exports = {


  findAll: function(req, res) {
    db.score
      .find(req.query)
      .then(dbScore => res.json(dbScore))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    const score = {

      score: req.body.score,

    };
    db.score
      .create(score)
      .then(dbScore => res.json(dbScore))
      .catch(err => res.status(422).json(err));
  },
};
