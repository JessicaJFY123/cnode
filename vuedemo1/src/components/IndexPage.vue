<template>
	<div>
		<router-view/>
		<footer>
			<ul>
				<li><router-link to="/">首页</router-link></li>
				<li><router-link to="/message">消息</router-link></li>
				<li><router-link to="/publish">发布</router-link></li>
				<li><router-link to="/mine">我的</router-link></li>
			</ul>
		</footer>
	</div>
</template>

<script>
	
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
	footer{
		width: 100%;
		height: 45px;
		background: #444444;
		position: fixed;
		bottom: 0;
	}
	footer ul{
		width: 100%;
		height: 100%;
		display: flex;
		list-style: none;
	}
	footer ul li{
		text-align: center;
		flex: 1;
		line-height: 45px;
	}
	footer ul li a{
		text-decoration: none;
		color:#fff;
	}
	footer ul li .router-link-exact-active{
		color: red;
	}
</style>