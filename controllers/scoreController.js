const db = require("../models");

module.exports = {


  findAll: function(req, res) {
    db.Score
      .find(req.query)
      .sort({ date: -1 })
      .then(dbScore => res.json(dbScore))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    const article = {
      _id: req.body._id,
      score: req.body.score,
    
    };
    db.Score
      .create(article)
      .then(dbScore => res.json(dbScore))
      .catch(err => res.status(422).json(err));
  },
};
