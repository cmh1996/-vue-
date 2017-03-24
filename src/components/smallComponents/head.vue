<template>
	<div class="header" :class="{'is-fixed':fixed}">
		<div class="header-left">
			<slot name="left-btn1"></slot>
		</div>
		<div class="header-center"><slot></slot></div>
		<div class="header-right">
			<slot name="right-btn1"></slot>
			<slot name="right-btn2"></slot>
		</div>
	</div>
</template>
<script>
	export default{
		name:"mHead",
		props:{
			fixed:{
				type:Boolean,
				default:false
			}
		}
	}
</script>
<style scoped>
.header{
	height: 3rem;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #fff;
	border-bottom: 1px solid #e4e4e4;
	box-sizing:border-box;
	padding: 0 0.5rem;
	z-index: 10;
}
.is-fixed{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.header-left{
	width: 4rem;
	height: 3rem;
	line-height: 3rem;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.header-center{
	flex: 1;
	text-align: center;
	font-size: 1.3rem;

}
.header-right{
	width: 4rem;
	height: 3rem;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
}
.header-left p{
	font-size:1rem;
}
.header-left span{
	width: 2rem;
	height: 2rem;
}
.header-left span svg{
	width: 2rem;
	height: 2rem;
}
.header-right span{
	width: 2rem;
	height: 2rem;
}
</style>