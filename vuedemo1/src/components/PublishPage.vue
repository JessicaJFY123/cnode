<template>
	<div class="container">
		<mheader title="发布"></mheader>
		<div class="title">
		    <input type="text" placeholder="标题" v-model="title"/>
		</div>
		<div class="tab">
			<select name="" v-model="tab">
				<option value="请选择">请选择</option>
				<option value="share">分享</option>
				<option value="ask">问答</option>
				<option value="job">招聘</option>
				<option value="test">测试</option>
			</select>
		</div>
		<div class="content">
			<textarea name="" placeholder="内容" v-model="content"></textarea>
		</div>
		<button style="float: left;" @click="publish">发布</button>
		
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
				title:"",
				tab:"",
				content:""
			}
		},
	    methods:{
	    	publish(){
	    		var that=this;
				if (that.title!=""&&that.tab!="请选择"&&that.content!="") {
					this.$store.dispatch("getPublish",{title:that.title,tab:that.tab,content:that.content})
					.then(function (res) {
						console.log("success"+res)
					})
					.catch(function (res) {
						console.log("false"+res)
						alert("服务器繁忙，请稍后再试")
					})
				}
		    }
	    }
	}
</script>

<style>
	*{
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;
	}
	div{
		margin: 10px 0;
		width: 100%;
		/*text-align: center;*/
	}
	input,select,textarea{
		display: block;
		width: 100%;
	}
	textarea{
		height: 200px;
	}
</style>