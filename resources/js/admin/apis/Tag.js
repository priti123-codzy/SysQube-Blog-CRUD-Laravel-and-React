import axios from 'axios';

const Tag = {
    list: (page = 1) => {
        return axios.get('api/tags?page=' + page);
    },
    add: (title) => {
        return axios.post('api/tags', {title}, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    showOne: (id) => {
        return axios.get('api/tags/' + id);
    },
    edit: (title, id) => {
        return axios.put('api/tags/' + id, {title}, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    remove: (id) => {
        return axios.delete('api/tags/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    listAll: () => {
        return axios.get('api/tags?all=1');
    }
};

export default Tag;