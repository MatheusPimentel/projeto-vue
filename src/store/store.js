import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sessao: undefined
  },
  mutations: {
    changeState (state, payload) {
      state.sessao = payload
    }
  },
  actions: {

  }
})
