require('dotenv').config({ path: __dirname + '/.env' });

const { Pool } = require('pg');

const pool = new Pool();

module.exports = pool;