<!--路由嵌套-->
<template>
	<div>
		<div class="row">
			<div class="col-md-4">
				<!--导航-->
				<div class="list-group">
					<router-link tag="li" class="nav-link" :to="{name:'historylink'}">
						<a class="list-group-item list-group-item-action">历史订单</a>
					</router-link>
					<router-link tag="li" class="nav-link" :to="{name:'contactlink'}">
						<a class="list-group-item list-group-item-action">联系我们</a>
					</router-link>
					<router-link tag="li" class="nav-link" :to="{name:'orderingGuidelink'}">
						<a class="list-group-item list-group-item-action">点餐文档</a>
					</router-link>
					<router-link tag="li" class="nav-link" :to="{name:'deliverylink'}">
						<a class="list-group-item list-group-item-action">快递信息</a>
					</router-link>
				</div>
				
				
				
			</div>
			<div class="col-md-8">
				<!--导航对应的内容-->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>