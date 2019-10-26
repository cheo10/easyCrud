const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "",
  ssl: true
});

async function query(queryString = "", params = []) {
  let client;
  try {
    if (!Array.isArray(params)) {
      throw "params is not an array";
    }
    if (typeof queryString !== "string") {
      throw "query is not a string";
    }
    client = await pool.connect();
    const res = await client.query(queryString, params);
    return res.rows;
  } catch (error) {
    throw "postgres query error: " + JSON.stringify(error);
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release();
  }
}

async function transaction(queryArray = [], params = []) {
  let client;
  try {
    if (!Array.isArray(params)) {
      throw "params is not an array";
    }
    if (!Array.isArray(queryArray)) {
      throw "query is not a string";
    }
    if (queryArray.length !== params.length) {
      throw "query array length does not equal params array length";
    }

    client = await pool.connect();
    await client.query("BEGIN");

    queryArray.map(async (statement, index) => {
      await client.query(statement, params[index]);
    });

    await client.query("COMMIT");
  } catch (error) {
    throw "postgres transaction error: " + JSON.stringify(error);
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release();
  }
}

module.exports = {
  query,
  transaction
};
