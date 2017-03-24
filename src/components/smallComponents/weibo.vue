<template>
	<div class="weibo">
		<div class="weibo-header">
			<span class="header-left"><slot name="head-icon"></slot></span>
			<div class="header-center">
				<span class="user-name"><slot></slot></span>
				<span class="user-info">11分钟前   来自 微博 weibo.com</span>
			</div>
			<span class="header-right">></span>
		</div>
		<div class="weibo-content">
			<slot name="content-p"></slot>
			<div class="content-else">
				<div class="content-photo" v-if="normal">
					<slot name="content-photo"></slot>
				</div>
				<div class="content-repost" v-else>
					<slot name="repost-name" id="repost-name"></slot>
					<slot name="repost-p" id="repost-p"></slot>
					<slot name="repost-photo" id="repost-photo"></slot>
				</div>
			</div>
		</div>
		<div class="weibo-footer">
			<span><slot name="icon-repost"></slot><slot name="num-repost"></slot></span>
			<span><slot name="icon-comment"></slot><slot name="num-comment"></slot></span>
			<span><slot name="icon-like"></slot><slot name="num-like"></slot></span>
		</div>
	</div>
</template>
<script>
export default{
	name:"weibo",
	props:{
		normal:{
			type:Boolean,
			default:false
		}
	}
}
</script>
<style scoped>
.weibo{
	width: 100%;
	padding: 0.5rem 0.5rem 0 0.5rem;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	background-color: white;
	margin-bottom: 1rem;
	box-sizing:border-box;
	overflow: hidden;
}
.weibo .weibo-header{
	width: 98%;
	height: 3rem;
	display: flex;
	flex-direction: row;
}
.weibo .weibo-header .header-left{
	width: 3rem;
	height: 3rem;
}
.weibo .weibo-header .header-left img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.weibo .weibo-header .header-center{
	flex: 1;
	height: 3rem;
	margin-left: 0.5rem;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: space-around;
}
.weibo .weibo-header .header-center .user-name{
	font-size: 1rem;
	width: 100%;
	text-align: left;
}
.weibo .weibo-header .header-center .user-info{
	font-size: 0.5rem;
	width: 100%;
	color: #5a5a5a;
	text-align: left;
}
.weibo .weibo-header .header-right{
   display: inline-block;
   width: 1rem;
   color: #5a5a5a;
   transform: rotate(90deg) scaleY(1.3);
   position: relative;
   right: 0.6rem;
   top: -0.6rem;
}

.weibo .weibo-content{
	width: 100%;
	margin-top: 0.5rem;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
}
.weibo .weibo-content .content-p{
	width: 100%;
	font-size: 0.9rem;
	line-height: 1.3rem;
}
.weibo .weibo-content .content-else{
	width: 100%;
	margin-top: 0.5rem;
}
.weibo .weibo-content .content-else .content-photo{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	align-content: flex-start;
}
.weibo .weibo-content .content-else .content-photo img{
	box-sizing:border-box;
	height: 6.5rem;
	margin-right: 0.6rem;
	display: inline-block;
	margin-top: 0.4rem;
} 
.weibo .weibo-content .content-else .content-photo img:nth-child(3n){
	margin-right: 0;
}
.weibo .weibo-content .content-else .content-repost{
	width: 100%;
	background-color: #e6e6e6;
	padding: 0.5rem;
	box-sizing:border-box;
}
.weibo .weibo-content .content-else .content-repost .repost-name{
	color: #6c92bc;
	font-size: 0.8rem;
}
.weibo .weibo-content .content-else .content-repost .repost-p{
	font-size: 0.8rem;
}
.weibo .weibo-content .content-else .content-repost .repost-photo{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	align-content: flex-start;
	margin-top: 0.5rem;
}
.weibo .weibo-content .content-else .content-repost .repost-photo img{
	box-sizing:border-box;
	height: 6rem;
	margin-right: 0.6rem;
	display: inline-block;
	margin-top: 0.4rem;
}
.weibo .weibo-content .content-else .content-repost .repost-photo img:nth-child(3n){
	margin-right: 0;
}
.weibo-footer{
	width: 100%;
	height: 2rem;
	box-sizing:border-box;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	padding: 0.3rem 0;
	border: 1px solid #d2d2d2;
	border-right: 0;
	border-left: 0;
	margin-top: 0.5rem;
}
.weibo-footer>span{
	width: 33.3%;
	border-right: 1px solid #d2d2d2;
	text-align: center;
}
.weibo-footer>span:last-child{
	border-right: 0;
}
.weibo-footer span img{
	width: 0.8rem;
	height: 0.8rem;
	display: inline-block;
	margin-right: 0.2rem;
}
.weibo-footer span span{
	font-size: 0.8rem;
	color: #939393;
}
</style>