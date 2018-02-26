<template>
	<div class="mess">
		<mheader title="消息"></mheader>
		<p v-if="!hasmeg">暂无消息</p>
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
				has_read_messages:[],
			      hasnot_read_messages:[],
			      hasmeg:false
			}
		},
		created(){
			var that=this;
		    this.$store.dispatch("getMessage")
		    .then(function (res) {
		    	  that.hasnot_read_messages = res.data.data.hasnot_read_messages;
      			  that.has_read_messages = res.data.data.has_read_messages;
		          if(that.hasnot_read_messages.length === 0){
		            that.hasmeg = false
		          }
				    
		    });
		    	
	    }
		
	}
</script>

<style>
   .mess p{
    	width: 100%;
    	height:88vh;
    	background: white;
    	display: flex;
    	align-items:center;
    	justify-content:center;
    	font-size: 20px;
    }
</style>