// use "import" to import libraries
import express from 'express';
import cors from 'cors';

const admins = require('./data/admins.json');
const subscription = require('./resources/subscription');
const classes = require('./resources/class');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/subscription', subscription);
app.use('/class', classes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/admins', (req, res) => {
  res.status(200).json({
    data: admins,
  });
});

app.listen(port, () => {
// eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
