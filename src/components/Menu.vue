<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.name">
					<tr>
						<td><strong>{{item.name}}</strong></td>
					</tr>
					<tr v-for="option in item.options" :key="option.size">
						<td>{{option.size}}</td>
						<td>{{option.price}}</td>
						<td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--购物车-->
		<div v-if="baskets.length!=0" class="col-sm-12 col-md-4">
			<table class="table">
				<thead class="thead">
					<tr>
						<th>数量</th>
						<th>品种</th>
						<th>价格</th>
					</tr>
				</thead>
				<tbody v-for="item in baskets">
					<tr>
						<td>
							<button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
							<span>{{item.quantity}}</span>
							<button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
						</td>
						<td>{{item.name}}{{item.size}}</td>
						<td>{{item.price*item.quantity}}</td>
					</tr>
				</tbody>
			</table>
			<p>总价: <span style="color: red;font-size: 18px">{{total}}</span> RMB</p>
			<button class="btn btn-success" style="width: 95%">提交</button>
		</div>	
		<div v-else>{{basketsText}}</div>
	</div>
</template>
<script>
import axios from 'axios'
	export default {
		data() {
			return {
				baskets:[],
				basketsText:'购物车没有任何商品',
//				getMenuItems: {}
			
			}
		},
		created() {
			//获取数据
			this.fetchData();
			
		},
		computed:{
			getMenuItems(){
				//在vuex中获取数据
//				return this.$store.state.menuItems
				//通过getters获取数据
				return this.$store.getters.getMenuItems
			},
			total(){
				let totalCost=0;
				for(let index in this.baskets){
					let individualItem=this.baskets[index];
					// console.log(individualItem);
					totalCost+=individualItem.price*individualItem.quantity;
				}
				return totalCost;
			}
		},

		methods:{
			addToBasket(item,option){
				let basket={
					name:item.name,
					size:option.size,
					price:option.price,
					quantity:1
				}
				if(this.baskets.length>0){
					// 过滤
					let result=this.baskets.filter((basket)=>{
						return (basket.name===item.name&&basket.price===option.price)
					})
					if(result!=null&&result.length>0){
						console.log(result.length);
						result[0].quantity++
					}
					else{
						console.log(this.baskets);
						this.baskets.push(basket);
					}
				}
				else{
					this.baskets.push(basket);
				}
				
			},
			decreaseQuantity(item){
				item.quantity--;
				if(item.quantity<=0){
					this.removeFromBasket(item);
				}
			},
			increaseQuantity(item){
				// console.log(item.quantity);
				item.quantity++;
			},
			removeFromBasket(item){
				this.baskets.splice(this.baskets.indexOf(item),1);
			},
			//获取数据
			fetchData(){
//				fetch('https://wd3077149792embzct.wilddogio.com/menu.json')
//				.then(res => {
//					return res.json()
//				})
//				.then(data => {
//					this.getMenuItem=data;
//				})


				//使用axios
				//配置了默认的根路径,没有配置Vue原型的使用方法
//				axios.get("menu.json")
//				.then(res=>this.getMenuItem=res.data)

				//配置了Vue原型的使用方法
//				this.http.get("menu.json")
//				.then(res=>this.getMenuItem=res.data)
				
				
				//将请求到的数据存储到vuex中
				this.http.get("menu.json")
				.then(res=>this.$store.commit("setMenuItems",res.data))
			}
		}
	}
</script>