// grab our db client connection to use with our adapters
const client = require('./client');

module.exports = {
  // add your database adapter fns here
  createScore,
  getAllScores,
  deleteScore,
};

async function createScore({
  score,
  name,
}) {
  try {
    const {
      rows: [result],
    } = await client.query(
      `
          INSERT INTO highscores(score, name) 
          VALUES($1, $2) 
          RETURNING *;
          `,
      [score, name]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getAllScores() {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM highscores
        ORDER BY score desc
        `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteScore({ id }) {
  try {
    const {
      rows: [result],
    } = await client.query(
      `
    DELETE
    FROM highscores
    WHERE id=$1;
    `,
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}
