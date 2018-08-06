<!--不刷新跳转  <router-link to="/">主页</router-link>-->

<template>
	<!--<header>-->

		<nav class="navbar navbar">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">

					<a class="navbar-brand" href="#"><span class="glyphicon glyphicon-cd"></span></a>
					<a class="navbar-brand" href="#">pizza点餐系统</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active">
							
							<!--动态绑定跳转地址，在data函数里面返回值-->
							<!--<router-link :to="homeLink">主页</router-link>-->
							<!--<router-link to="/">主页</router-link>-->
							<router-link :to="{name:'homelink'}" exact>主页</router-link>
						</li>
						<li>
							<!--<router-link to="/Menu">菜单</router-link>-->
							<router-link :to="{name:'menulink'}" exact>菜单</router-link>
						</li>
						<li>
							<!--<router-link to="/Admin">管理</router-link>-->
							<router-link :to="{name:'adminlink'}" exact>管理</router-link>
						</li>
						<li>
							<!--<router-link to="/About">关于我们</router-link>-->
							<router-link :to="{name:'aboutlink'}" exact>关于我们</router-link>
						</li>
					</ul>

					<ul class="nav navbar-nav navbar-right">
						
						<li>
							<!--<router-link to="/Login">登录</router-link>-->
							<router-link :to="{name:'loginlink'}" v-show="!isLogin" class="nav-link" exact >登录</router-link>
						</li>
						<li class="nav-link" v-show="isLogin"><a href="#">{{currentUser}}</a></li>
						<li class="nav-link" v-show="isLogin" @click="SignOut">
							<a href="#">[退出]</a>
							<!--<router-link to="/Register">注册</router-link>-->
							
						</li>
						<li>
							<!--<router-link to="/Register">注册</router-link>-->
							<router-link :to="{name:'registerlink'}" v-show="!isLogin" exact>注册</router-link>
						</li>
					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>

	<!--</header>-->
</template>

<style type="text/css">
	.router-link-active{
		background: rgba(255,255,255,0.8);
		color: #444;
	}
</style>
<script>
	//动态绑定跳转地址
	export default{
		data(){
			return{
				homeLink:'/',
				// email: sessionStorage.email,
				// isLogin:sessionStorage.Login
			}
		},
		computed:{
			
			currentUser(){
				return this.$store.getters.currentUser
			},
			
			isLogin(){
				return this.$store.getters.isLogin
			}
		},
		
		methods:{
   			SignOut(){
// 				alert(11);
   				sessionStorage.clear("email");
   				sessionStorage.clear("Login");
				this.$store.dispatch("setUser",null);
   				this.$router.push({name:"loginlink"})
   			}
   			
		}
		
	}
</script>