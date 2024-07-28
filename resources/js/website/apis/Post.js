import axios from 'axios';

const Post = {
  getRecent: () => {
      return axios.get('api/posts?recent=1');
  },
  getByCategory: (id, page = 1) => {
      return axios.get('api/posts?category=' + id + '&page=' + page);
  },
    getByTag: (tag, page = 1) => {
        return axios.get('api/posts?tag=' + tag + '&page=' + page);
    },
    getById: (id) => {
      return axios.get('api/posts/' + id);
    }
};

export default Post;