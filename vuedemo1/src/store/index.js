import Vue from "vue"
import Vuex from "vuex"
//数据请求时使用  axios
import axios from "axios"

Vue.use(Vuex)

const store=new Vuex.Store({
	//保存状态
	state:{
       		
	},
	//修改状态，操作的是state
	mutations:{
       
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
			})
		},
		getLogin(store,token){
			return axios.post("https://cnodejs.org/api/v1/accesstoken",{
				accesstoken:token
			})
		},
		getUser(store,user){
			console.log(user)
			return axios.get("https://cnodejs.org/api/v1/user/"+user.loginname)
		}
		
	},
	//获取状态
	getters:{
		 accesstoken: (state) => state.accessToken,
         user: ( state) => state.user
	}
})

export default store;
