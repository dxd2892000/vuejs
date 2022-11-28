import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/index.js'
import http from '@/plugins/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store,
  http
}).$mount('#app')
