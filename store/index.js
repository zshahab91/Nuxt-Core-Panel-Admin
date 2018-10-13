import Vue from 'vue'
import Vuex from 'vuex'
import moduleReport from './modules/report'
import moduleUser from './modules/user'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      user: moduleUser,
      report: moduleReport
    }
  })
}

export default createStore
