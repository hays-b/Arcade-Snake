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
        { score: 60, name: 'ME' },
        { score: 70, name: 'YOU' },
        { score: 110, name: 'MOS' },
        { score: 50, name: 'YAY' },
        { score: 120, name: 'TIC' },
        { score: 100, name: 'POO' },
        { score: 90, name: 'CAT' },
        { score: 250, name: 'WHB' },
        { score: 300, name: 'BOI' },
        { score: 80, name: 'MAS' },
        { score: 60, name: 'ME' },
        { score: 70, name: 'YOU' },
        { score: 110, name: 'MOS' },
        { score: 50, name: 'YAY' },
        { score: 120, name: 'TIC' },
        { score: 100, name: 'POO' },
        { score: 90, name: 'CAT' },
        { score: 250, name: 'WHB' },
        { score: 300, name: 'BOI' },
        { score: 80, name: 'MAS' },
        { score: 60, name: 'ME' },
        { score: 70, name: 'YOU' },
        { score: 110, name: 'MOS' },
        { score: 50, name: 'YAY' },
        { score: 120, name: 'TIC' },
        { score: 100, name: 'POO' },
        { score: 90, name: 'CAT' },
        { score: 250, name: 'WHB' },
        { score: 300, name: 'BOI' },
        { score: 80, name: 'MAS' },
        { score: 60, name: 'ME' },
        { score: 70, name: 'YOU' },
        { score: 110, name: 'MOS' },
        { score: 50, name: 'YAY' },
        { score: 120, name: 'TIC' },
        { score: 100, name: 'POO' },
        { score: 90, name: 'CAT' },
        { score: 250, name: 'WHB' },
        { score: 300, name: 'BOI' },
        { score: 80, name: 'MAS' },
        { score: 60, name: 'ME' },
        { score: 70, name: 'YOU' },
        { score: 110, name: 'MOS' },
        { score: 50, name: 'YAY' },
        { score: 120, name: 'TIC' },
        { score: 100, name: 'POO' },
        { score: 90, name: 'CAT' },
        { score: 250, name: 'WHB' },
        { score: 300, name: 'BOI' },
        { score: 80, name: 'MAS' },
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