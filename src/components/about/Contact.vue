<template>
	<div>
		<h3>Contact</h3>
		<p>联系我们</p>
		<router-link :to="{name:'phonelink'}">联系人</router-link>
		<router-link :to="{name:'phonenumlink'}">联系电话</router-link>
		<div>
			<router-view></router-view>
		</div>
	</div>
	
	
</template>