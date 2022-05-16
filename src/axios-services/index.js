import axios from 'axios';

export async function getAPIHealth() {
    try {
      const { data } = await axios.get('/api/health');
      return data;
    } catch (err) {
      console.error(err);
      return { healthy: false };
    }
  }

  export const getAllScores = async () => {
    try {
      const response = await axios.get(`api/scores`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  export const createScore = async (score, name) => {
    try {
      const response = await axios.post(`api/scores`, {
            score,
            name,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          })
  
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  export const deleteScore = async (scoreId) => {
      console.log('did we make it to axios', scoreId)
    try {
      const response = await axios.delete(`api/scores/${scoreId}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
  
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };