const {
    client,
    HighScore,
  } = require('./');
  
  async function buildTables() {
    try {
      client.connect();
      console.log('Started dropping table');

      await client.query(`
      DROP TABLE IF EXISTS highscores;
      `);
      console.log('Finished dropping table');
  
      // build tables in correct order
      await client.query(`
      CREATE TABLE highscores (
        id SERIAL PRIMARY KEY,
        score INTEGER NOT NULL,
        name varchar(3) NOT NULL
      );
      `);
  
      console.log('Finished creating table');
    } catch (error) {
      console.log('Problem with building table');
      throw error;
    }
  }
  
  async function createInitialScores() {
    try {
      console.log('Starting to create scores...');
      const scoresToCreate = [
        { score: 120, name: 'WHB' },
        { score: 70, name: 'WB' },
        { score: 70, name: 'MOS' },
        { score: 300, name: 'MAU' },
        { score: 120, name: 'WHB' },
        { score: 70, name: 'WB' },
        { score: 70, name: 'MOS' },
        { score: 300, name: 'MAU' },
        { score: 70, name: 'WB' },
        { score: 70, name: 'MOS' },
      ];
      const scores = await Promise.all(scoresToCreate.map(HighScore.createScore));
      console.log('Finished creating scores');
    } catch (error) {
      console.error('Error creating scores');
      throw error;
    }
  }
  
  const rebuildDB = () => {
    buildTables()
      .then(createInitialScores)
      .catch(console.error)
      .finally(() => client.end());
  }
  
  rebuildDB()
  
    module.exports = {
      rebuildDB
    };