import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    fetch (state, {data}) {
      state.data = data
    }
  },
  actions: {
    fetch (context) {
      axios
        .get("https://www.meye.net/toylibrary-data/seocho.json")
        .then((data) => {
          context.commit('fetch', data)
        })
    }
  },
  getters: {
    data(state) {
      return state.data
    }
  },
  plugins: [createPersistedState()]
})
