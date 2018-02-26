import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage'
import HomePage from '@/components/HomePage'
import MessagePage from '@/components/MessagePage'
import PublishPage from '@/components/PublishPage'
import MinePage from '@/components/MinePage'
import DetailPage from '@/components/DetailPage'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

var router= new Router({
  routes: [
    {
      path: '/',
      component: IndexPage,
      children:[
        {
        	path: '/',
		      component: HomePage
        },
		    {
		      path: '/message',
		      component: MessagePage
		    },
		    {
		      path: '/publish',
		      component: PublishPage
		    },
		    {
		      path: '/mine',
		      component: MinePage
		    },
		    {
		      path: '/detail/:id',
		      component: DetailPage
		    },
      ]
    },
    {
    	 path: '/login',
      component: LoginPage,
    }
   
  ]
})

//设置默认页面
//router.push("IndexPage")

export default router;
