import axios from "axios";

const Auth = {
  login: (data, successCb, failCb) => {
      axios.post('/api/login', data).then(response => {

          successCb(response);

      }).catch(err => {

          failCb(err);
      });
  },

  logout: (successCb, failCb) => {
      axios.get('/api/logout', {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}})
          .then(response => {
              localStorage.clear();

              successCb(response);
          }).catch(err => {
              failCb(err);
      });
  },

  register: (data, successCb, failCb) => {
      axios.post('/api/register', data)
          .then(response => {
            successCb(response);
          }).catch(err => {
            failCb(err);
      });
  }
};

export default Auth;