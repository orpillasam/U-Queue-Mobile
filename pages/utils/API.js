import axios from 'axios';

export default {
  // Gets all books
  getQueue: function() {
    return axios.get('/api/queue');
  }
}