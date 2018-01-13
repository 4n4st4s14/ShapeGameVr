const db = require('../models');

module.exports = {


  findAll: function(req, res) {
    db.Score
      .find(req.query)
      .sort({ date: -1 })
      .then(dbScore => res.json(dbScore))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    const score = {

      score: req.body.score,

    };
    db.Score
      .create(score)
      .then(dbScore => res.json(dbScore))
      .catch(err => res.status(422).json(err));
  },
};
