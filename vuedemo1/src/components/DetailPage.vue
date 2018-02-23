<template>
	<div>
		<h1>详情页</h1>
			<img :src="data.author.avatar_url" />
			<h3>{{data.author.loginname}}</h3>
			<div v-html="data.content">
				
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:{}
			}
		},
		created(){
			var id=this.$route.params.id;
			//console.log(this.$route)
			var that=this;
			this.$store.dispatch("getTopic",id)
			.then(function (res) {
				that.data=res.data.data
				console.log(that.data)
			})
		}
	}
</script>

<style>
</style>