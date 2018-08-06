<template>
	<div class="row mt-3">
		<div class="col-md-12">
			<div class="card">
				<div class="card-body">
					<img style="height: 500px;display: block;margin: 0 auto 10px;max-width: 100%" src="../assets/iu.png" alt="">
					<form @submit.prevent="onSubmit">
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" class="form-control" v-model="email">
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="password" class="form-control" v-model="password">
						</div>

					
						<button class="btn btn-block btn-success">登录</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		data(){
			return{
				email:'1123167945@qq.com',
				password:'123456',
				Login:false
			}
		},
		//导航守卫,组件内守卫，当点击退出时，清楚当前用户
		// beforeRouteEnter:(to,from,next)=>{
		// 	next(vm=>vm.$store.dispatch("setUser",null))
		// },
		methods:{
			onSubmit(){
//				this.formData = $(".form").serialize();
				axios.get('/user.json')
				.then(res=>{
					// console.log(res);
					const data=res.data;
					const users=[];
					for(let key in data){
						const user=data[key];
						// console.log(user);
						users.push(data[key]);
					}
					// console.log(users);
					// 实现过滤
					let result=users.filter((user)=>{
						return user.email===this.email&&user.password===this.password
					})
					// console.log(result);
					// result是一个数组
					if(result!=null&&result.length>0){
						this.$store.dispatch("setUser",result[0].email);
						
						//将信息保存在 sessionStorage中
//						console.log(result);
						this.email=result[0].email;
						this.password=result[0].password;

						this.Login=true;
						sessionStorage.setItem("email",result[0].email);
						sessionStorage.setItem("Login",this.Login);
						
						console.log(this.email);
//    					console.log(this.Login);

//						this.$emit('userSignIn', this.userName);
//						this.$emit('userSignIn', this.isLogin);
						this.$router.push({path:'/'})
					}
					else{
						alert("账号或密码错误");
						this.$store.dispatch("setUser",null);
					}
				})
				
			}
		}
	}
</script>