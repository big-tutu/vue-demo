export default {
  namespaced: true,
  state: {
    text: 'this is home store'
  },
  actions: {
    doSomething ({commit}) {
      commit('add', {count: 3}, { root: true })
    }
  },
  mutations: {},
  getters: {}
}