import axios from "axios";

const Category = {
    list: (page = 1) => {
        // no auth
        return axios.get('api/categories?page=' + page);
    },
    add: (title) => {
        return axios.post('api/categories', {title}, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    showOne: (id) => {
        return axios.get('api/categories/' + id);
    },
    edit: (title, id) => {
        return axios.put('api/categories/' + id, {title}, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    remove: (id) => {
        return axios.delete('api/categories/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
    },
    listAll: () => {          // used to populate dropdowns
        // no auth
        return axios.get('api/categories?all=1');
    }
};

export default Category;