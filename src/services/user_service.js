import http from '@/plugins/';
// import { authHeaders } from '@/utils/auth';

class UserService {
  getListUser() {
    return http
      .get('/users')
      .then(res => {
        return res?.data?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  update(user) {
    return http
      .post('/users/update', user)
      .then(res => {
        console.log("Update: ",res)
        return res;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  detail(id) {
    return http
      .get(`users/detail/${id}`)
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  delete(id) {
    return http
      .post(`/users/delete/${id}`)
      .then(res => {
        return res?.message;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
}

const userService = new UserService();

export default userService;