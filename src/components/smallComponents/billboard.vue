<template>
	<div class="billboard">
		<p class="billboard-p"><slot></slot></p>
		<div class="billboard-photo">
			<slot name="photo"></slot>
		</div>
		<div class="billboard-footer">
			<div class="footer-left">
				<slot name="hotpoint"></slot>
				<slot name="username"></slot>
				<slot name="commentnum"></slot>
			</div>
			<img src="../../assets/logo.png" alt="">
		</div>
	</div>
</template>
<script>
import clamp from "../../clamp.min.js"
export default{
	name:'billboard',
	methods:{
		elli:function(){
			var content = document.getElementsByClassName('billboard-p');
			for(var i=0;i<content.length;i++){
				$clamp(content[i],{clamp:2});
			}
		}
	},
	mounted:function(){
		this.elli();
	}
}
</script>
<style scoped>
.billboard{
	width: 100%;
	background-color: white;
	border-bottom: 1px solid #e6e6e6;
	padding: 0.7rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	box-sizing:border-box;
}
.billboard>p{
	font-size: 1rem;
	width: 100%;
	height: 2.4rem;
	line-height: 1.2rem;
	overflow: hidden;
}
.billboard .billboard-photo{
	width: 100%;
	margin-top: 0.4rem;
	display: flex;
	flex-flow: row nowrap;
	overflow: hidden;
}
.billboard .billboard-photo img{
	width: 7rem;
	height: 6rem;
	display: inline-block;
	margin-right: 0.2rem;
}
.billboard .billboard-photo img:last-child{
	margin-right: 0;
}
.billboard .billboard-footer{
	width: 100%;
	margin-top: 0.4rem;
	display: flex;
	justify-content: space-between;
	color: #aeaeae;
	font-size: 0.6rem;
}
.billboard .billboard-footer .footer-left span{
	margin-right: 0.3rem;
	font-size: 0.8rem;
}
.billboard .billboard-footer .footer-left .hotpoint{
	border:1px solid orange;
	color: orange;
	border-radius: 0.2rem;
	padding: 0 0.2rem;
}
.billboard .billboard-footer>img{
	width: 0.6rem;
	height: 0.6rem;
	display: inline-block;
}
</style>