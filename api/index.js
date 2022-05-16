const apiRouter = require('express').Router();
const scoresRouter = require('./highScores');
// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = process.env;

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'specify an api route to proceed',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});

apiRouter.use('/scores', scoresRouter);

apiRouter.use((error, req, res, next) => {
  console.log('SENDING ERROR: ', error);
  res.send(error);
});

module.exports = apiRouter;
