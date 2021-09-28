/* eslint-disable no-console */
import env from 'dotenv/config';
import mongoose from 'mongoose';
import config from '../config/config';
import app from './express';

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, () => {
  console.info(`Connected successfully to mongodb server: ${config.mongoUri}`);
});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

const listen = app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Server started on port ${config.port}`);
});
const { port } = { ...listen.address() };
export default {
  port, app, env,
};
