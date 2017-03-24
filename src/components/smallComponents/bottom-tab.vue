<template>
	<div class="bottom-tab">
		<slot></slot>
	</div>
</template>
<script>
import tabItem from './tab-item'
export default{
	name:'bottomTab',
	props:['value']
}
</script>
<style scoped>
.bottom-tab{
	display: flex;
	flex-direction: row;
	align-items: center;
	position: fixed;
	bottom: -0.1rem;
	left: 0;
	right: 0;
	width:100%;
	height: 3rem;
	background-color: #fff;
	border-top: 1px solid #e4e4e4;
}
</style>