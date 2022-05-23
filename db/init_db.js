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
        { score: 50, name: 'ME' },
        { score: 60, name: 'YOU' },
        { score: 70, name: 'MOS' },
        { score: 80, name: 'YAY' },
        { score: 70, name: 'TIC' },
        { score: 80, name: 'POO' },
        { score: 90, name: 'CAT' },
        { score: 100, name: 'HOW' },
        { score: 100, name: 'BOY' },
        { score: 110, name: 'AL' },
        { score: 60, name: 'TOM' },
        { score: 120, name: 'H.B' },
        { score: 120, name: 'PR' },
        { score: 130, name: ':D' },
        { score: 120, name: 'SAM' },
        { score: 100, name: 'M&M' },
        { score: 90, name: 'DOG' },
        { score: 140, name: 'GOO' },
        { score: 150, name: 'WUT' },
        { score: 160, name: '<3' },
        { score: 170, name: 'UFO' },
        { score: 170, name: 'FYR' },
        { score: 180, name: 'OK' },
        { score: 190, name: 'AFK' },
        { score: 200, name: 'TAC' },
        { score: 200, name: 'OFC' },
        { score: 220, name: 'BRB' },
        { score: 250, name: 'BOB' },
        { score: 300, name: '._.' },
        { score: 80, name: 'HI' },
        { score: 60, name: 'L' },
        { score: 70, name: ':(' },
        { score: 110, name: 'HOW' },
        { score: 250, name: 'BAM' },
        { score: 260, name: 'SIK' },
        { score: 270, name: 'H.B' },
        { score: 280, name: 'PEW' },
        { score: 290, name: 'H.B' },
        { score: 300, name: 'LAD' },
        { score: 80, name: 'JOE' },
        { score: 60, name: 'MEW' },
        { score: 70, name: 'REF' },
        { score: 180, name: 'WIN' },
        { score: 50, name: 'LIT' },
        { score: 120, name: 'ZZZ' },
        { score: 100, name: 'TWO' },
        { score: 110, name: 'PI' },
        { score: 40, name: 'WOW' },
        { score: 310, name: 'BOI' },
        { score: 350, name: 'WHB' },
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