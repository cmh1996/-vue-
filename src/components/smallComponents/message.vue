<template>
	<div class="message">
		<span class="msg-img"><slot name="msg-img"></slot></span>
		<div class="message-center">
			<div class="headline"><slot name="headline"></slot></div>
			<slot name="content" v-if="!main"></slot>
		</div>
		<div class="message-right">
			<span class="logo" v-if="main">></span>
			<span class="time" v-else>昨天</span>
		</div>
	</div>
</template>
<script>
import clamp from "../../clamp.min.js"
export default{
	name:'message',
	props:{
		'main':{
			type:Boolean,
			default:false
		}
	},
	methods:{
		elli:function(){
			var content = document.getElementsByClassName('msg-content');
			for(var i=0;i<content.length;i++){
				$clamp(content[i],{clamp:1});
			}
		}
	},
	mounted:function(){
		this.elli();
	}
}
</script>
<style scoped>
	.message{
		width: 100%;
		height: 5rem;
		display: flex;
		border-bottom: 1px solid #d7d7d7;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		box-sizing: border-box;
		padding:0.4rem;
		overflow: hidden;
	}
	.msg-img{
		width: 4rem;
		height: 90%;
		margin-right: 1rem;
	}
	.msg-img img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.message-center{
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		overflow: hidden;
	}
	.message-center .headline{
		font-size: 1.2rem;
	}
	.message-center .msg-content{
		font-size: 0.8rem;
		color: #585858;
		overflow: hidden;
		position: relative;
		margin-top: 0.4rem;
		height: 1rem;
		width: 100%;
		line-height: 1rem;
	}
	.message-right{
		width: 2rem;
		height: 100%;
		text-align: right;
	}
	.message-right .logo{
		font-size: 2rem;
		color: #585858;
		position: relative;
		top: 0.5rem;
	}
	.message-right .time{
		font-size: 0.8rem;
		color: #585858;
	}
</style>