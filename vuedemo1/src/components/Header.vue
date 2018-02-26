<template>
	<div class="header">
		<h3>{{title}}</h3>
	</div>
</template>

<script>
	export default{
		props:["title"]
	}
</script>

<style>
	*{
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;
	}
	.header{
		
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		 position: fixed;
		  top: 0;
		  background: #fff;
	}
	.header h3{
		margin: 0;
		padding: 0;
		line-height: 40px;
	}
</style>