import axios from "axios";

const Tag = {
    getAll: () => {
        return axios.get('api/tags?all=1');
    },
    getById: (id) => {
        return axios.get('api/tags/' + id);
    }
};

export default Tag;