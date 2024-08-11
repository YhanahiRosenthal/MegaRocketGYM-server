const express = require('express');
const cors = require('cors');
const router = require('./routes');
const fileSizeManage = require('./middlewares/fileSizeMiddleware');

const app = express();

app.use(fileSizeManage);
app.use(cors({
  origin: 'https://mega-rocket-gym.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization',
}));
app.options('*', cors());
app.use(express.json());
app.use('/api', router);

module.exports = app;
