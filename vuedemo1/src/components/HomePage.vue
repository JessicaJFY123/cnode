<template>
	<div>
		<div class="loading" v-if="!loading">
			<img src="../../static/time.jpg"/>
		</div>
		<div class="header" >
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
		       <ul>
		       	   <li><img :src="art.author.avatar_url" /></li>
		       	   <li>
			       	   	<div >
			       	   		<router-link :to="'/detail/'+art.id"> {{art.title}}</router-link>
			       	   </div>
			       	   <div>
			       	   		<router-link :to="'/detail/'+art.id"> 访问量：{{art.visit_count}}</router-link>
			       	        <!--<router-link :to="'/detail/'+art.id"> 访问时间：{{art.last_reply_at}}</router-link>-->
			       	   </div>
		       	   
		       	   </li>
		       	   <!--<li><router-link :to="'/detail/'+art.id"> 访问时间： {{ art.last_reply_at }}</router-link></li>-->
		       </ul>
		   
		   </div>
		 
	    </div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				articleList:[],
				loading:false
			}
		},
		created(){
				var that=this;
				this.$store.dispatch("getTopics","all")
				.then(function (res) {
					console.log(res);
					that.articleList=res.data.data;
					that.loading=true
				})
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
		font-size: 14px;
	}
	
	.loading img{
		width: 100px;
		height: 100px;
		position: fixed;
		top: 40%;
		left: 40%;
	}
	.header{
		width: 100%;
		height: 45px;
		background: #fff;
		position: fixed;
		top: 0;
	}
	 ul{
		width: 100%;
		height: 100%;
		display: flex;
		list-style: none;
		align-items: center;
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
     .articleList ul{
     	background: white;
     	border-bottom: solid 1px #eee;
     }
     .articleList ul:hover{
     	background: #eee;
     }
    .articleList img{
    	width: 40px;
    	height: 40px;
    }
    .articleList li{
    	text-align: center;
    	margin: 5px 10px;
    }
   /*.articleList li:last-child{
    	position: fixed;
    	right: 0;
    }*/
   
</style>