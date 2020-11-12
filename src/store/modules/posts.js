import axios from 'axios'
import {API_ENDPOINT} from '../../constants/apis'

const state = () => ({
  posts: [],
  userPost:[]
})

const getters = {}

const mutations = {
  FETCH_ALL_POST (state, payload) {
    state.posts = payload
  },
  FETCH_USER_POST (state, payload) {
    state.userPost = payload
    console.log('data:', payload)
  }
}

const actions = {
  async fetchAllPost ({commit}, payload) {
    const {data} = await axios.get(`${API_ENDPOINT}/posts`, payload)
    commit('FETCH_ALL_POST', data)
  },
  async fetchUserPost({commit}, payload) {
    const {data} = await axios.get(`${API_ENDPOINT}/posts?userId=${payload.userId}`, payload)
    commit('FETCH_USER_POST', data)
  }
}

const postModule = {
  state,
  getters,
  mutations,
  actions
}

export default postModule
