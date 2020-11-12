import Vue from 'vue'
import Vuex from 'vuex'
import postModule from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post: postModule
  }
})
