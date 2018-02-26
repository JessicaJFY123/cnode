<template>
	<div>
		<mheader title="登录"></mheader>
		<div class="tec">
			<input type="text" v-model="token" /><br />
	   	    <input type="button" value="登录" @click="login"/>
	    </div>
	    
	</div>
</template>

<script>
	import Header from "./Header";
	export default{
		components:{
			mheader:Header
		},
		data(){
			return{
				token:""
			}
		},
		methods:{
			login(){
				var that=this;
				this.$store.dispatch("getLogin",that.token)
				.then(function (res) {
					console.log(res);
					if (res.data.success===true) {
						//console.log(res.data.loginname)
						that.$store.dispatch("getUser",res.data)
						that.$router.push({path:"mine",query:{
							loginname:res.data.loginname,
							avatar_url:res.data.avatar_url,
							success:res.data.success
						}})
						//that.$router.push("/mine")
					}
				})
				
			}
		}
	}
</script>

<style>
	div{
	 width: 100%;
	 margin: 0;
	 padding: 0;
	 box-sizing: border-box;
	 text-align: center;
	}
	.tec{
		width: 100%;
		text-align: center;
	}
	.tec input{
		display: block;
		width: 100%;
		height: 50px;
		margin-top: 20px;
		border-radius:10px ;
	}
	.tec input:last-child{
		background: dodgerblue;
		color: white;
	}
</style>