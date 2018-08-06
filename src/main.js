// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

//import "../static/bootstrap-3.3.7-dist/css/bootstrap.min.css"
import {
  routes
} from './routes';
import axios from 'axios'

import {
  store
} from './store/store.js'


//Vue.config.productionTip = false

Vue.use(VueRouter)


//配置默认根路径
axios.defaults.baseURL = 'https://wd3077149792embzct.wilddogio.com/'
//配置Vue原型（在任何组件中都可以正常使用axios）
Vue.prototype.http = axios

//name属性可用于页面跳转



const router = new VueRouter({
  routes,
  //去掉断口后的#
  mode: 'history',

  //注意: 这个功能只在支持 history.pushState 的浏览器中可用。
  //scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
  scrollBehavior(to, from, savedPosition) {
    //		return{x:0,y:100}
    //也可以是选择器
    //		return{selector:'.btn'}

    if (savedPosition) {
      return;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})


//全局守卫
router.beforeEach((to, from, next) => {
  //判断store.getters.isLogin==false
   
  if (sessionStorage.Login==true || sessionStorage.Login=='true') {
    // store.dispatch('isLogin',JSON.parse(sessionStorage.Login));\
    let user=sessionStorage.email;
    store.dispatch('setUser',user)
    next();

  } else {
    if (to.path == '/Login' || to.path == '/Register') {
		// console.log("login");
      next();
    } else {
      alert("请先登录");
      next({path: '/Login'});
    }

  }

})

//后置钩子
// router.afterEach((to,from)=>{
// 	alert("afterEach")
// })



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App) //vue2.0的写法
  //components: { App },vue1.0的写法
  //template: '<App/>'
})
