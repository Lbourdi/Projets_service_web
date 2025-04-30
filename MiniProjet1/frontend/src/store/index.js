import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/services/user.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User : null,
    isLogged: false
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user) {
      state.User = user
      state.isLogged = user !== null
    },
  },
  actions: {
    async signUp({commit}, data){
      let response = await userService.signUpService(data)
      if (response.error === 0) {
        commit('SET_USER', response.data)
        return 0
      }
      else {
        alert(response.message)
        return 1
      }
    },

    async signIn({commit}, data){
      let response = await userService.loginService(data)
      if (response.error === 0) {
        console.log(response.data)
        commit('SET_USER', response.data)
        return 0
      }
      else {
        alert(response.message)
        return 1
      }
    },

    async logOut({commit}){
      let response = await userService.logOutService()
      console.log(response.error)
      if (response.error === 0) {
        console.log("oui")
        commit('SET_USER', null)
        return 0
      }
      else {
        alert(response.message)
        return 1
      }
    },

    async checkSession({commit}){
        let response = await userService.checkSessionService()
        if (response.error === 0) {
            commit('SET_USER', response.data)
            return 0
        }
        else {
            commit('SET_USER', null)
            return 1
        }
    }
  },
  modules: {
  }
})
