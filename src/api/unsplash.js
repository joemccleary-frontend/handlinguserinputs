import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID s8az6yv_PRxVLknY1DLEV6D9mvKbTT5TppXBZ000UgQ'
    }
})