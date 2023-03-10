import axios from 'axios';

const http = (token) => {
    const headers = {}
    if(token){
        headers.authorization = 'Bearer '+ token
    }
    const instance = axios.create({
        baseURL: 'https://68xkph-8888.preview.csb.app',
        headers,
    })
    return instance
}

export default http