<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<!--newpizza-->
			<app-new-pizza></app-new-pizza>
		</div>
		<div class="col-sm-12 col-md-4">
			<!--newpizza-->
			<h3 class="text-muted my-5">菜单</h3>
			<table class="table">
				<thead class="table table-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.name">
					<tr>
						<td>{{item.name}}</td>
						<td>
							<button @click="deleteData(item)" class="btn btn-outline btn-danger btn-sm">&times;</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	import NewPizza from './NewPizza.vue'
	export default {
		components: {
			'app-new-pizza': NewPizza
		},
		data() {
			return {
//				getMenuItems: []
			}
		},
		computed:{
			getMenuItems:{
				get(){
					//在vuex中获取数据
//					return this.$store.state.menuItems
					//通过getters获取数据
					return this.$store.getters.getMenuItems
				},
				
				set(){
					
				}
			}
		},
		created() {
			//获取数据
			fetch('https://wd3077149792embzct.wilddogio.com/menu.json')
				.then(res => {
					return res.json()
				})
				.then(data => {
					//				console.log(data);
					let menuArray = [];
					for(let key in data) {
						//				console.log(key);
						//				console.log(data[key]);
						data[key].id = key;
						menuArray.push(data[key]);
					}
//					this.getMenuItems = menuArray;

					//数据同步
					this.$store.commit('setMenuItems',menuArray)
				})
		},
		methods: {
			deleteData(item) {
//				console.log()
				fetch('https://wd3077149792embzct.wilddogio.com/menu/' + item.id + '/.json', {
					method: "DELETE",
					headers: {
						'Content-type': 'application/json'
					}
				})
				.then(res=>res.json())
//				.then(data=>this.$router.push({name:'menulink'}))
				.then(data=>{
					this.$store.commit('removeMenuItems',item)
				})
				.catch(err=>console.log(err))
			}
		}
	}
</script>