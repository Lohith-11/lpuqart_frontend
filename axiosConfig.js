import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8082/verse', // Adjust the base URL as needed
});

export default instance;