import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: true
  },
  actions: {

  },
  mutations: {
    startLoading (state) {
      state.loading = true
      console.log(state.loading)
    },
    finishLoading (state) {
      state.loading = false
      console.log(state.loading)
    }
  },
  getters: {

  }
})

export default store
