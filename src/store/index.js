import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import about from './about';


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    about
  }
})

export default store