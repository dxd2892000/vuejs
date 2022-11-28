import http from '@/plugins/index.js'
import { authHeaders } from '@/utils/auth';

class AuthService {
    login(user) {
       return http.post('/login', user)
       .then(res => {
        return res?.data
       })
       .catch(err => {
        return Promise.reject(err);
      });
    }
    register(user) {
      console.log('user: ', user)
        return http
          .post('/register', user)
          .catch(err => {
            return Promise.reject(err);
          });
    }
    logout() {
        return http
        .post('/logout')
          .then((res) => {
            console.log('rés: ', res)
            return res;
          })
          .catch(err => {
            console.log('error')
            console.log(err)
            return Promise.reject(err);
          });
      }  
}

const authService = new AuthService()
export default authService