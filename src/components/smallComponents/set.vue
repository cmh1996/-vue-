<template>
	<div class="set">
		<slot name="set-img"></slot>
		<slot name="set-title"></slot>
		<slot name="set-remark"></slot>
		<span class="set-icon">
			<slot name="set-icon"></slot>
		</span>
	</div>
</template>
<script>
export default{
	name: "set",
	props:{
		setIcon:{
			type:String,
			default:'arrow'
		}
	}
}
</script>
<style scoped>
.set{
	width: 100%;
	height: 3rem;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	padding: 0.5rem;
	box-sizing:border-box;
	overflow: hidden;
	background-color: white;
	border: 1px solid #e6e6e6;
}
.set .set-img{
	width: 1.4rem;
	height: 1.4rem;
}
.set .set-title{
	margin-left: 1rem;
}
.set .set-remark{
	margin-left: 0.5rem;
	color: #b6b6b6;
	font-size: 0.6rem;
	flex: 1;
}
.set .set-icon{
	width: 1.2rem;
	height: 1.2rem;
}
.set .set-icon #set-arrow{
	color: #212326;
}
.set .set-icon #set-point{
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	background-color: red;
	display: inline-block;
}
.set .set-icon #set-num{
	color: white;
	background-color: #444547;
	width: 1rem;
	height: 1rem;
	font-size: 0.4rem;
	border-radius: 50%;
	display: inline-block;
	text-align: center;
	line-height: 1rem;
}
</style>