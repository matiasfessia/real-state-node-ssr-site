require('dotenv').config()

const port = process.env.REAL_STATE_APP_PORT || 3001;
const appHost = process.env.REAL_STATE_APP_HOST || 'http://localhost:3001';
const databaseUrl = process.env.REAL_STATE_DATABASE_URL || 'mongodb://127.0.0.1:27017/spacios';

module.exports = {
  port,
  appHost,
  databaseUrl
}
