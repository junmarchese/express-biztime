/** Database setup for BizTime. */
require('dotenv').config();
const { Client } = require("pg");

let DB_URI = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "test") {
    DB_URI = process.env.TEST_DATABASE_URL;
}

let db = new Client({
    connectionString: DB_URI
});

db.connect();

module.exports = db;

