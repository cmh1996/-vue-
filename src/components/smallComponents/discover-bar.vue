<template>
	<span class="discover-item">
		<slot name="item-title"></slot>
		<slot name="item-line"></slot>
	</span>
</template>
<script>
export default{
	name:'discoverBar',
}
</script>
<style scoped>
.discover-item{
	width: 4rem;
	height: 3.4rem;
	line-height: 3.4rem;
	text-align: center;
	position: relative;
}
.discover-item div{
	width: 1.2rem;
	height: 0.2rem;
	background-color: orange;
	position: absolute;	
	bottom: 0.5rem;
	left: 50%;
	margin-left: -0.6rem;
}
.discover-item .bold{
	font-weight: bolder;
}
</style>