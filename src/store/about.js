export default {
  state: {
    text: 'this is about store',
    count: 1
  },
  mutations: {
    add (state, {count}) {
      state.count = count
    }
  },
  actions: {
    fetchList (context, {count = 2}) {
      context.commit('add', {count})
    }
  },
  getters: {
    doneCount: state => state.count
  }
}