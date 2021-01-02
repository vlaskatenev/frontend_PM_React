import axios from 'axios'
import {baseURL, authorizationToken} from '../variables.global'

export default axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
    }
})
