const express = require('express');
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// express 초기셋팅
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

const port = 8080;

app.use('/', require('./router'));

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

const server = () => {
  app.listen(port, () => {
    console.log(`Http server listening on port ${port}`);
  });
};

module.exports = { server };
