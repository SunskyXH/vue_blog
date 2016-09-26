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
    },
    finishLoading (state) {
      state.loading = false
    }
  },
  getters: {
    getLoadingState: state => {
      return state.loading
    }
  }
})

export default store
