<template>
	<div class="container">
		<div class="loading" v-if="!loading">
			<img src="../../static/time.jpg" />
		</div>
		<mheader title="主题"></mheader>
		<ul>
			<li><img :src="data.author.avatar_url" style="width: 100%;" /></li>
			<li>
				<div style="text-align: left;" class="loginname">
					<p> {{data.author.loginname}}</p>
				</div>
				<div style="text-align: left;" class="time">
					<p>{{data.create_at}}</p>
				</div>

			</li>

		</ul>
		<h3>{{data.title}}</h3>
		<div v-html="data.content"></div>
	</div>
</template>

<script>
	import Header from "./Header";
	export default {
		components: {
			mheader: Header
		},
		data() {
			return {
				data: {},
				loading: false
			}
		},
		created() {
			var id = this.$route.params.id;
			//console.log(this.$route)
			var that = this;
			this.$store.dispatch("getTopic", id)
				.then(function(res) {
					that.data = res.data.data
					console.log(that.data)
					that.loading = true
				})
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.container {
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
		background: white;
	}
	
	.container h3 {
		padding: 10px 0;
	}
	
	.container .loading img {
		width: 100px;
		height: 100px;
		position: fixed;
		top: 40%;
		left: 40%;
	}
	
	.container ul {
		width: 100%;
		height: 100%;
		display: flex;
		list-style: none;
		align-items: center;
		border-bottom: solid 1px lightgray;
	}
	
	.container ul li:first-child {
		flex: 1;
		padding: 10px;
	}
	
	.container ul li:first-child img {
		width: 100%;
	}
	
	.container ul li:last-child {
		flex: 5;
	}
	
	.markdown-text p img {
		width: 100%;
	}
	
</style>