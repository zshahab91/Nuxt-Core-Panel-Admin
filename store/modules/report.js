import { HTTP } from '../services/http-common'
import { checkRes } from '../services/validate'


const _ = require('lodash');

const moduleReport = {
  namespaced: true,
  state: {
    noData: false,
    loading: false,
    noResult: null
  },
  mutations: {
    getEmptyReports: (state) => {
      state.reports = []
      return state.reports
    }
  },

  getters: {
    getData: (state) => {
      return state.reports
    }
  },
  actions: {
    emptyReports ({commit}) {
      commit('getEmptyReports')
    },
    getToken ({commit, state, rootState}) {
      state.loading = true
      state.noResult = null
      let url = "posts"
      HTTP.get(url)
        .then((res) => {
          console.log('res is:', res)
          // if (checkRes(res)) {
          //   state.loading = false
          // }
        })
        .catch((err) => {
          state.loading = false
          console.log('err is:', err)
          err = err.toString()
          if (err.includes('404')) {
            state.noResult = 'No Data For Show...!'
          } else {}
          return err
        })
    }
  }
}

export default moduleReport
