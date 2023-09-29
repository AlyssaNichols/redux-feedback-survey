const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/feedback", (req, res) => {
  // Find all orders and return them
  pool
    .query('SELECT * FROM "feedback" ORDER BY "id" ASC;')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /feedback", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  let feedback = req.body;
  const queryText = `
      INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
      VALUES
        ($1, $2, $3, $4);
    `;
  pool
    .query(queryText, [
      feedback.feelings,
      feedback.understanding,
      feedback.support,
      feedback.comments,
    ])
    .then((response) => res.sendStatus(201))

    .catch((err) => {
      console.log("There was an error:", err);
      res.sendStatus(500);
    });
}); 

module.exports = router;