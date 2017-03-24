<template>
	<div class="refresh">
		<span class="refresh-logo" v-show="refreshStage=='down'"><img src="../../assets/logo.png" alt=""></span>
		<span class="refresh-logo" v-show="refreshStage=='limit'"><img src="../../assets/active-logo.png" alt=""></span>
		<span class="refresh-logo" v-show="refreshStage=='loading'"><img src="../../assets/search2.png" alt=""></span>
		<span class="refresh-title" v-show="refreshStage=='down'">下拉刷新</span>
		<span class="refresh-title" v-show="refreshStage=='limit'">释放更新</span>
		<span class="refresh-title" v-show="refreshStage=='loading'">加载中</span>
	</div>
</template>
<script>
export default{
	name:'refresh',
	props:{
		refreshStage:{
			type:String,
			default:'down'
		}
	}
}
</script>
<style scoped>
.refresh{
	width: 100%;
	height: 2rem;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
}
.refresh-logo{
	height: 100%;
	display: flex;
	align-items: center;
}
.refresh-logo img{
	width: 1.4rem;
	height: 85%;
	display: inline-block;
}
.refresh-title{
	color: #212326;
	font-size: 1rem;
	margin-left: 0.6rem;
}
</style>