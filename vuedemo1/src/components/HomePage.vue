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
		<div style="padding-bottom: 10%;" >
			
			   <div class="articleList" v-for="art in articleList">
			   	  <router-link :to="'/detail/'+art.id">
			       <ul>
			       	   <li><img :src="art.author.avatar_url" /></li>
			       	   <li>
				       	   	<div style="text-align: left;" class="loginname">
				       	   		<p> {{art.author.loginname}}</p>
				       	   </div>
				       	   	<div style="text-align: left;" class="time">
				       	   		<p>{{art.create_at | date}}</p>
				       	   </div>
				       	   	<div style="text-align: left;">
				       	   		<h1 class="art-title" style="font-weight: 600;font-size: 16px;">
			                      <span v-if="art.top" class="top" style="border-color:red;color:red;">置顶</span>
			                      <span v-if="art.tab && !art.top" class="top">{{ art.tab | tab }}</span>
			                      {{art.title}}</h1>
				       	   		<!--<p style="font-weight: 600;font-size: 16px;"> {{art.title}}</p>-->
				       	   </div>
			       	   </li>
			       	  
			       </ul>
			       <ul class="myrow">
			       	   	   <li class="visit">
			       	   	   	  <i class="iconfont icon-kandian">{{art.visit_count}}</i>
			       	   	   </li>
			       	   	   <li class="comment">
			       	   	   	    <i class="iconfont icon-pinglun">{{art.reply_count}}</i>
			       	   	   </li>
			       	   	   <li class="time">
			       	   	   	    {{ art.last_reply_at | reply_time}}
			       	   	   </li>
			       </ul>
			   
		         </router-link>
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
		filters:{
			tab (ele){
		          switch (ele) {
		            case 'ask':
		              return '问答'
		              break;
		            case 'share':
		              return '分享'
		              break;
		            case 'good':
		              return '精华'
		              break;
		            case 'job':
		              return '招聘'
		              break;
		            default: return ""
		
		          }
		      },
			 date(ele) {
	          var date = new Date(ele);
	          var y = date.getFullYear();
	          var m = date.getMonth();
	          var d = date.getDate();
	          var hh = date.getHours();
	          var mm = date.getMinutes();
	          var ss = date.getSeconds();
	          return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;
           },
            reply_time(ele) {
          var lr = new Date(ele);
          var now = new Date;
          var dt = now - lr;
          var s = dt/1000;
          var m = s/60;
          var h = m/60;
          // console.log(h,m,s)
          if(s < 60){
            return s + '秒前';
          }else if(s < 3600){
            return parseInt(s/60) + '分钟前';
          }else if( s < 86400 ){
            return parseInt(s/60/60) + '小时前';
          }else if( s < 2592000){
            return parseInt(s/60/60/24) + '天前';
          }else if(s < 31104000){
            return parseInt(s/60/60/24/30) + '月前';
          }else if(s < 311040000){
            return parseInt(s/60/60/24/30/12) + '年前';
          }
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
	a{
		text-decoration: none;
		color: black;
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
		border-bottom: solid 3px lightgray;
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
    .loginname a{
    	color: black;
    	font-weight: 600;
    }
   .myrow{
   	  width:100%;
   	  display: flex;
   	  align-items: center;
   	  	border-bottom:solid 1px lightgray ;
   }
   .myrow li{
	   	flex: 1;
	   	text-align: center;
	   	border-right:solid 1px lightgray ;
	   
   }
   .top{
	  width: 50px;height: 20px;
	  font-size: 15px;
	  border: solid 1px #38f;
	  border-radius: 3px;
	  color: #38f;
	  padding:0 2px;
	}
</style>