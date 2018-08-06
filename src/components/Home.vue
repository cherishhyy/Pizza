<template>
	<div class="row">
		<div id="home" class="col-md-12 text-center">
			<div class="background">
				<h1>欢迎大家品尝pizza！</h1>
				<h2>这里有你非常喜欢的pizza！</h2>
				<button class="btn-success" @click="goTomenu">Let go</button>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			goTomenu(){
				//跳转到上一次浏览页面
//				this.$router.go(-1);

				//跳转到指定的地址
//				this.$router.replace('/Menu');

				//指定跳转路由的名字
//				this.$router.replace({name:'menulink'});
				
				//常用push进行跳转
//				this.$router.push('/Menu');
				this.$router.push({name:'menulink'});
			}
		}
	}
</script>
<style>
	#home{
		background: url(../assets/iu.png);
		height: 95vh;
		padding: 10%;
	}
	h1,h2{
		margin: 6%;
	}
	.background{
		background: #eee;
		opacity: 0.8;
		max-width: 70vw;
		margin: 0 auto;
		padding: 20px 0;
	}
</style>