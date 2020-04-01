import axios from 'axios';
let ajax = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getBlogList = () => {
    return ajax.get('/posts')
}