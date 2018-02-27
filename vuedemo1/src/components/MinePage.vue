<template>
	<div>
		<mheader title="个人中心"></mheader>
			<div class="img" @click="loginfunc">
				<img :src="user.avatar_url"/>
				<p>{{user.loginname}}</p>
			</div>
		<div class="links">
			<p class="topic">
				<router-link to="/message">发表主题</router-link>
			</p>
			<p class="msg">
				<router-link to="/publish">我的消息</router-link>
			</p>
			
		</div>
	</div>
</template>

<script>
	import Header from "./Header"
	export default{
		components:{
			mheader:Header
		},
		data(){
			return{
			   	user:{
			   		 avatar_url:"../../static/moren.jpg",
			   	     loginname:"您还未登录，请先登录"
			   	},
			   login:false,
			}
		},
		 created(){
		    var user=this.$store.getters.user;
		    console.log(user.avatar_url)
			if (user.success===true) {
				this.user.loginname=user.loginname;
				this.user.avatar_url=user.avatar_url;
				//console.log(this.avatar_url)
				this.login=true;
			} 
			
		},
		methods:{
			loginfunc(){
				if (!this.login) {
					this.$router.push("/login")
				}
			}
		}
		
	}
</script>

<style>
	.img img{
		width: 100px;
		height: 100px;
		border-radius:50px ;
	}
	.links{
		width: 100%;
		margin-top: 40px;
	}
	.links p{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		padding: 10px 40px;
		background: white;
		border-bottom: solid 1px gray;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.links p a{
		text-decoration: none;
       font-size: 16px;
       color: black;
	}
</style>