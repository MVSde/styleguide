import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: undefined,
    search: '',
    project: {},
    components: [],
    current: {}
  },

  getters: {
    componentByPath: state => path => {
      function find (list) {
        for (const item of list) {
          if (item.path === path) {
            return item
          }

          const child = find(item.children || [])

          if (child) {
            return child
          }
        }
      }

      return find(state.components) || {}
    }
  },

  mutations: {
    sidebar (state, data) {
      state.sidebar = data
    },
    search (state, data) {
      state.search = data
    },
    project (state, data) {
      Vue.set(state, 'project', data)
    },
    components (state, data) {
      Vue.set(state, 'components', data)
    },
    current (state, data) {
      Vue.set(state, 'current', data)
    }
  }
})
