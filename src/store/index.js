import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from './modules/auth.js'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth	
	},
	plugins: [createPersistedState()]
})
export default store