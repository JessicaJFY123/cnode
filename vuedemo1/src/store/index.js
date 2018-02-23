import Vue from "vue"
import Vuex from "vuex"

import axios from "axios"


Vue.use(Vuex)

const store=new Vuex.Store({
	//保存状态
	state:{
		
	},
	//修改状态，操作的是state
	mutations:{
       
	},
	//提交mutation，操作的是mutation
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
		}
		
	},
	//获取状态
	getters:{
		
	}
})

export default store;
