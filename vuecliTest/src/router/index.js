import Vue from 'vue'
import Router from 'vue-router'
import pos from '@/components/page/pos'
import vip from '@/components/page/vip'
import helloworld from '@/components/page/helloworld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: pos
    },
    {
      path:'/vip',
      name:'vip',
      component:vip
    },
    {
      path:'/helloworld',
      name:'helloworld',
      component:helloworld
    }
  ]
})
