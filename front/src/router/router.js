import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import nongyefenleiList from '../pages/nongyefenlei/list'
import nongyefenleiDetail from '../pages/nongyefenlei/detail'
import nongyefenleiAdd from '../pages/nongyefenlei/add'
import nongyezhishiList from '../pages/nongyezhishi/list'
import nongyezhishiDetail from '../pages/nongyezhishi/detail'
import nongyezhishiAdd from '../pages/nongyezhishi/add'
import shujutongjiList from '../pages/shujutongji/list'
import shujutongjiDetail from '../pages/shujutongji/detail'
import shujutongjiAdd from '../pages/shujutongji/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussnongyezhishiList from '../pages/discussnongyezhishi/list'
import discussnongyezhishiDetail from '../pages/discussnongyezhishi/detail'
import discussnongyezhishiAdd from '../pages/discussnongyezhishi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'nongyefenlei',
					component: nongyefenleiList
				},
				{
					path: 'nongyefenleiDetail',
					component: nongyefenleiDetail
				},
				{
					path: 'nongyefenleiAdd',
					component: nongyefenleiAdd
				},
				{
					path: 'nongyezhishi',
					component: nongyezhishiList
				},
				{
					path: 'nongyezhishiDetail',
					component: nongyezhishiDetail
				},
				{
					path: 'nongyezhishiAdd',
					component: nongyezhishiAdd
				},
				{
					path: 'shujutongji',
					component: shujutongjiList
				},
				{
					path: 'shujutongjiDetail',
					component: shujutongjiDetail
				},
				{
					path: 'shujutongjiAdd',
					component: shujutongjiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussnongyezhishi',
					component: discussnongyezhishiList
				},
				{
					path: 'discussnongyezhishiDetail',
					component: discussnongyezhishiDetail
				},
				{
					path: 'discussnongyezhishiAdd',
					component: discussnongyezhishiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
