import axios from 'axios';

export default axios.create({
  proxy: {
    host: 'https://api.instagram.com',
    port: 9000
  },
});
