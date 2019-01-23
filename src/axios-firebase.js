import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://aung-khant-a04b5.firebaseio.com/'
});

export default instance;