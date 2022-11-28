import authService from '@/services/auth_service.js'
import {AUTH, LOGOUT, REGISTER, UPDATE} from '@/constans/index'
import router from '@/router'

export const auth = {
  namespaced: true,
  state: {
    auth: {},
    isAuthencated: false
  },
  getters: {
    auth: state => state.auth,
    isAuthencated: state => state.isAuthencated
  },
  mutations: {
    [AUTH](state, data) {
      state.auth = data
      localStorage.setItem('token', data.token)
      state.isAuthencated = true
    },
    [REGISTER](state, data) {
      localStorage.setItem('token', data.token)
    },
    [LOGOUT](state) {
      state.auth = ''
      state.isAuthencated = false
    },
    [UPDATE](state,data) {
      state.auth = data;
      console.log("UPDATE AUTH: ",data);
    },
  },
  actions: {
    [AUTH]({ commit }, auth) {
      return authService.login(auth).then(data => {
        console.log(data),
        commit(AUTH, data)
      });
    },
    [REGISTER]({ commit }, user) {
      console.log('param: ', user)
      return authService.register(user).then(res => {
        console.log('res: ', res),
        commit(REGISTER,res),
        router.push('/home')
      })
    },
    [LOGOUT]({commit}) {
      console.log('logout')
      return authService.logout().then(data => {
        commit(LOGOUT),
        localStorage.removeItem('token')
        console.log(data)
        return data;
      })
    }    
  },
}
