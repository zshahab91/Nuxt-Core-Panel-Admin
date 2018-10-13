import { HTTP } from '../services/http-common'
import { checkRes } from '../services/validate'
import jwtDecode from 'jwt-decode'

const _ = require('lodash')

const moduleUser = {
  namespaced: true,
  state: {
    user: null,
    token: null,
    loading: false
  },
  mutations: {
    setToken: (state, payload) => {
      console.log('setToken')
      localStorage.setItem('token', payload.token)
      let user = jwtDecode(payload.token)
      state.user = user
      state.token = payload.token
      localStorage.setItem('user', user)
    }
  },
  getters: {
    getToken: (state) => {
      return state.token
    },
    getUser: (state) => {
      return state.user
    }
  },
  actions: {
    login({commit, state, rootState}, payload) {
      state.loading = true
      let url = 'posts'
      let obj = {
        username: payload.user.username,
        pass: payload.user.pass
      }
      let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NWMwNjRjZDY5OTUxZWYwMjIyZTFiMmEiLCJpYXQiOjE0NDIwMzM0MjksImV4cCI6MTQ0MjI0OTQyOX0.mu_yrc5havxaiNhJRrjuuJfGy_swQBRGJJqrACA6BfI"
      HTTP.post(url,obj)
        .then((res) => {
          commit({
            type: 'setToken',
            token: token
          })
          state.loading = false
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
export default moduleUser
