import axios from "axios";

export default {

  // Saves an article to the database
  saveScore: function(score) {
    return axios.post("/api/score", score);
    console.log(score);
  }
};
