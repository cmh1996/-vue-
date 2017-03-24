<template>
	<div class="discover-icon">
		<slot name="icon-photo"></slot>
		<slot name="icon-title"></slot>
	</div>
</template>
<script>
export default{
	name:'discoverIcon',
}
</script>
<style scoped>
.discover-icon{
	width: 20%;
	height: 5rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
}
.discover-icon img{
	display: inline-block;
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
}
.discover-icon span{
	font-size: 1rem;
}
#loadBtn>img{
	transition: all .5s;
}
#loadBtn .rotateBtn{
	transform: rotate(180deg);
	transition: all .5s;
}
</style>