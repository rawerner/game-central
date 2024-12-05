import axios from 'axios';

export default axios.create({
        baseURL:'https://api.rawg.io/api',
        params: {
            key: '0606283dd8434aae8393f09650b92327'
        },
});
