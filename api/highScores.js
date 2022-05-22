const scoresRouter = require("express").Router();
const { HighScore } = require("../db");

scoresRouter.use("/", (req, res, next) => {
  console.log("A request is being made to /highscores");

  next();
});

scoresRouter.get("/", async (req, res, next) => {
  try {
    const allScores = await HighScore.getAllScores();

    res.send(allScores);
  } catch ({ name, message }) {
    res.status(409);
    next({ name, message });
  }
});

scoresRouter.post("/", async (req, res, next) => {
  const { score, name } = req.body;

  const scoreData = {
    score,
    name,
  };

  try {
    const score = await HighScore.createScore(scoreData);

    res.send(score);
  } catch ({ name, message }) {
    res.status(409);
    next({ name, message });
  }
});

scoresRouter.delete("/:id", async (req, res, next) => {
    console.log('hello', req.params)
  try {
    const deletedScore = await HighScore.deleteScore(req.params);

    res.send(deletedScore);
  } catch ({ name, message }) {
    res.status(409);
    next({ name, message });
  }
});

module.exports = scoresRouter;
