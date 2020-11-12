import Vue from 'vue'
import Router from 'vue-router'
import Login from '../layouts/auth/login/Login'
import Register from '../layouts/auth/register/Register'
import AllPost from '../../pages/post/AllPost'
import PostDetail from '../../pages/post/_id/PostDetail'
import User from '../../pages/user/User'
Vue.use(Router)

// https://alligator.io/vuejs/lazy-loading-vue-cli-3-webpack/
export default new Router({
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import(/* webpackChunkName: "hello" */ `@/components/HelloWorld`)
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/register',
      component: Register,
      name: 'register'
    },
    {
      path: '/post',
      component: AllPost,
      name: 'post'
    },
    {
      path: '/post/:postId',
      component: PostDetail,
      name: 'postDetail'
    },
    {
      path: '/user/:userId',
      component: User,
      name: 'user'
    }
  ]
})
