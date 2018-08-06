// //	改变属性的状态
// export const setMenuItems=(state,data)=>{
// 			state.menuItems=data
// 		}
// 		//将想要删除的数据通过item传递，匹配对象，在menuItems数组中删除
// export const removeMenuItems=(state,data)=>{
// 			state.menuItems.forEach((item,index)=>{
// 				if(item==data){
// 					state.menuItems.splice(index,1)
// 				}
// 			})
// 		}
// 		//将新添加的pizza  push到menuItems中
// export const pushToMenu=(state,data)=>{
// 			state.menuItems.push(data);
// 		}
// //export const userStatus=(state,user)=>{
// //			if(user){
// //				state.currentUser=user;
// //				state.isLogin=true;
// //			}else{
// //				state.currentUser=null;
// //				state.isLogin=false;
// //			}
// //		}