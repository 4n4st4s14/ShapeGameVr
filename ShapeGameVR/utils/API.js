import axios from "axios";

export default {

  // Saves an article to the database
  saveScore: function(score) {
    return axios.post("/routes/api/score", score);
    console.log(score);
  }
};
