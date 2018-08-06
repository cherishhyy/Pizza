import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'
import History from './components/about/History'


//三级路由
import Phone from './components/about/phone/Phone'
import Phonenum from './components/about/phone/Phonenum'

//路由：https://router.vuejs.org/zh-cn/


//前面加export，在main.js中才能得到routes
export const routes=[
	
	{path:'/',name:'homelink',components:{
		//复用router-view
		default:Home,
		'orderingGuide':OrderingGuide,
		'delivery':Delivery,
		'history':History,
	}},
	{path:'/Menu',name:'menulink',component:Menu},
	{path:'/Admin',name:'adminlink',component:Admin},
	{path:'/Login',name:'loginlink',component:Login},
	{path:'/Register',name:'registerlink',component:Register},
	//二级路由，使用children;redirect  表示默认显示哪个页面
	{path:'/About',name:'aboutlink',redirect:'/about/contact',component:About,children:[
			{path:'/about/contact',name:'contactlink',redirect:'/about/phone',component:Contact,children:[
					//三级路由
					{path:'/about/phone',name:'phonelink',component:Phone},
					{path:'/about/phonenum',name:'phonenumlink',component:Phonenum},
			]},
			{path:'/about/delivery',name:'deliverylink',component:Delivery},
			{path:'/about/orderingGuide',name:'orderingGuidelink',component:OrderingGuide},
			{path:'/about/history',name:'historylink',component:History}
	]},
	
	//如果没有上述路径，跳转到根路径
	// {path:'*',redirect:'/'}
]

