<template>
	<div class="search-box" :class="{'white':isWhite,'grey':isGrey}">
		<input type="search" :placeholder="pl"/>
	</div>
</template>
<script>
	export default{
		name:'searchBox',
		props:{
			pl:{
				type:String,
				default:'搜索联系人和群'
			},
			isWhite:{
				type:Boolean,
				default:true
			},
			isGrey:{
				type:Boolean,
				default:false
			}
		}
	}
</script>
<style scoped>
.search-box{
	width: 100%;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.search-box input{
	width: 94%;
	height: 70%;
	border: none;
	border-radius: 10px;
	font-family: "微软雅黑";
	font-size: 0.8rem;
	padding-left: 2rem;
	background-size: 6%;
	background-repeat:no-repeat;
	background-position: 0.3rem 0.4rem;
}
.white{
	background-color: #e6e6e6;
}
.white input{
	background-color: white;
	color: #212326;
	background-image: url('../../assets/search1.png');
}
.grey{
	background-color: white;
}
.grey input{
	background-color: #e6e6e6;
	color: white;
	background-image: url('../../assets/search2.png');
	text-align: center;
}
</style>