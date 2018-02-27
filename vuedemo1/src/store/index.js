import Vue from "vue"
import Vuex from "vuex"
//数据请求时使用  axios
import axios from "axios"

import qs from 'qs'

Vue.use(Vuex)

const store=new Vuex.Store({
	//保存状态
	state:{
       user:{}
	},
	//修改状态，操作的是state
	mutations:{
       getUser(state,user){
       	  state.user=user;
       }
	},
	//提交mutation，操作的是mutation,请求数据，因为是异步的，所以用actions
	actions:{
		getTopics(store,tab){
			return axios.get("https://cnodejs.org/api/v1/topics",{
				params:{
					page:1,
					tab:tab,
					limit:10
				}
			})
		},
		getTopic(store,id){
			return axios.get("https://cnodejs.org/api/v1/topic/"+id)
		},
		getMessage(store){
			return axios.get("https://cnodejs.org/api/v1/messages?accesstoken=0b676841-5632-4db6-b440-29157e0e94f5")
		},
		getPublish(store,obj){
			console.log(obj)
			return axios.post("https://cnodejs.org/api/v1/topics",{
				params:{
					accesstoken:'0b676841-5632-4db6-b440-29157e0e94f5',
					title:obj.title,
					tab:obj.tab,
					content:obj.content
				}
			}
				)
		},
		getLogin(store,token){
			return axios.post("https://cnodejs.org/api/v1/accesstoken",{
				accesstoken:token
			})
		},
		getUser(store,user){
			store.commit('getUser',user)
		}
		
	},
	//获取状态
	getters:{
         user: ( state) => state.user
       
	}
})

export default store;
