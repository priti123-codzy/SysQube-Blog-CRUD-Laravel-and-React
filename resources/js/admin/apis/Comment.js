import axios from 'axios';

const Comment = {
    list: (page = 1) => {
        return axios.get('/api/comments?page=' + page);
    },
    showOne: (id) => {
        return axios.get('/api/comments/' + id);
    },
    edit: (payload, id) => {
        return axios.put('/api/comments/' + id, payload, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    remove: (id) => {
        return axios.delete('/api/comments/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    }
};

export default Comment;