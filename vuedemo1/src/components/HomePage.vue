<template>
	<div>
		<div class="header">
			<ul>
				<li @click="getDate('all')">全部</li>
				<li @click="getDate('share')">精华</li>
				<li @click="getDate('good')">分享</li>
				<li @click="getDate('ask')">问答</li>
				<li @click="getDate('job')">招聘</li>
			</ul>
		</div>
		<div>
		   <div class="articleList" v-for="art in articleList">
		   	   <router-link :to="'/detail/'+art.id"> {{art.title}}</router-link>
		   </div>
	    </div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				articleList:[]
			}
		},
		methods:{
			getDate(tab){
				var that=this;
				console.log(tab);
				this.$store.dispatch("getTopics",tab)
				.then(function (res) {
					console.log(res);
					that.articleList=res.data.data
					
				})
			}
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body{
		background: #eee;
	}
	.header{
		width: 100%;
		height: 45px;
		background: #fff;
		position: fixed;
		top: 0;
	}
	.header ul{
		width: 100%;
		height: 100%;
		display: flex;
		list-style: none;
	}
	.header ul li{
		text-align: center;
		flex: 1;
		line-height: 45px;
		color:#80BD01;
	}
    .header ul li:hover{
    	color: white;
    	background:#80BD01 ;
    }
</style>