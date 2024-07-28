import axios from 'axios';

const Comment = {
    store: (payload) => {
        return axios.post('/api/comments', payload, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    }
};

export default Comment;