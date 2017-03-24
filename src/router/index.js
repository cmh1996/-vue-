import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../components/Homepage'
import Messages from '../components/Messages'
import Myzone from '../components/Myzone'
import Discover from '../components/Discover'
import Post from '../components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },{
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },{
      path: '/Messages',
      name: 'Messages',
      component: Messages
    },{
      path: '/Myzone',
      name: 'Myzone',
      component: Myzone
    },{
      path: '/Discover',
      name: 'Discover',
      component: Discover
    },{
      path: '/Post',
      name: 'Post',
      component: Post
    }
  ]
})
