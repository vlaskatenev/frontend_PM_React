import axios from 'axios'

export default axios.create({
    baseURL: 'http://127.0.0.1:8081/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 6845ceea30ebdfd038a0e45324c90d4003803ea8'
    }
})
