<template>
	<div class="video-box">
		<div class="video">
			<slot name="video"></slot>
			<slot name="playNum"></slot>
			<slot name="time"></slot>
		</div>
		<p class="video-content">
			<slot></slot>
			<slot name="content-label"></slot>
		</p>
		<div class="video-meta">
			<div class="video-meta-left">
				<slot name="video-usericon"></slot>
				<slot name="video-username"></slot>
			</div>
			<div class="video-meta-right">
				<span class="meta-right-left">
					<img src="../../assets/logo.png" alt="" />
					<slot name="commentNum"></slot>
				</span>
				<img src="../../assets/logo.png" alt="" />
				<span class="meta-right-right">
					<img src="../../assets/logo.png" alt="" />
					<slot name="likeNum"></slot>
				</span>
			</div>
		</div>
	</div>
</template>

<script scoped>
import clamp from "../../clamp.min.js"
export default{
	name:'videoBox',
	methods:{
		elli:function(){
			var content = document.getElementsByClassName('video-content');
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

<style>
.video-box{
	margin-top: 1rem;
	width: 100%;
	background-color: white;
	display: flex;
	flex-flow: column nowrap;
	border-top:1px solid rgba(0,0,0,0.2);
	padding: 0.5rem;
	box-sizing:border-box;
}
.video-box .video{
	width: 100%;
	height: 10rem;
	overflow: hidden;
	position: relative;
}
.video-box .video img{
	width: 100%;
	height: 100%;
}
.video-box .video #playNum{
	color: white;
	position: absolute;
	left: 0.3rem;
	bottom: 0.3rem;
}
.video-box .video>span:last-child{
	color: white;
	position: absolute;
	right: 0.3rem;
	bottom: 0.3rem;
}
.video-box .video-content{
	margin-top: 0.8rem;
	font-size: 1rem;
	width: 100%;
	height: 2.4rem;
	line-height: 1.2rem;
	overflow: hidden;
	position: relative;
}

.video-box .video-content span{
	color: #8ea9c7
}
.video-box .video-meta{
	width: 100%;
	height: 2rem;
	display: flex;
	margin-top: 0.7rem;
	flex-flow: row nowrap;
	justify-content: space-between;
}
.video-box .video-meta .video-meta-left{
	display: flex;
	align-items: center;
}
.video-box .video-meta .video-meta-left img{
	width: 2rem;
	height: 2rem;
	display: inline-block;
	border-radius: 50%;
}
.video-box .video-meta .video-meta-left span{
	font-size: 0.8rem;
	color: #494949;
	margin-left: 0.6rem;
}
.video-box .video-meta .video-meta-right{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.video-box .video-meta .video-meta-right .meta-right-left{
	position: relative;
	width: 2.8rem;
	height: 100%;
	display: inline-block;
}
.video-box .video-meta .video-meta-right .meta-right-left img{
	width: 1.2rem;
	height: 1.2rem;
	position: absolute;
	left: 0;
	top: 50%;
	margin-top: -0.6rem;
}
.video-box .video-meta .video-meta-right .meta-right-left span{
	padding: 0 0.2rem;
	height: 0.9rem;
	background-color: red;
	color: white;
	font-size: 0.6rem;
	border-radius:1rem;
	position: absolute;
	top: 0;
	right: 0;
}
.video-box .video-meta .video-meta-right>img{
	width: 1.2rem;
	height: 1.2rem;
	display: inline-block;
	margin-left: 0.8rem;
}
.video-box .video-meta .video-meta-right .meta-right-right{
	margin-left: 0.8rem;
	display: flex;
	align-items: center;
}
.video-box .video-meta .video-meta-right .meta-right-right img{
	width: 1.2rem;
	height: 1.2rem;
	display: inline-block;
}
.video-box .video-meta .video-meta-right .meta-right-right span{
	font-size: 0.8rem;
	color: #494949;
}
</style>