<template>
	<a class="tab-item" @click="turn">
		<span class="tab-item-icon" :class="{'no-text':noText}"><slot name="icon-normal"></slot></span>
		<span class="tab-item-icon" :class="{'no-text':noText}"><slot name="icon-active"></slot></span>
		<slot name="tab-item-text"></slot>
	</a>
</template>
<script>
	export default{
		name:'tabItem',
		props:{'id':{
			type:String
		},
		isRouter:{
			type:Boolean,
			default:false
		},
		noText:{
			type:Boolean,
			default:false
		}
	},
	methods:{
			turn:function(){
				this.$parent.$emit('input',this.id);
				if(this.isRouter){
					this.$router.push(this.id)
				}
			}
		}
	}
</script>
<style scoped>
.tab-item{
	flex: 1;
	text-align: center;
	position: relative;
}
.tab-item-icon{
	display: block;
	display: flex;
	justify-content: center;
}
.tab-item-icon img{
	width: 30%;
	height: 30%;
}
.tab-item-text{
	display: block;
	font-size: 0.7rem;
	color:#949494;
}
.is-active{
	color:#42bd56;
}
.tab-item .no-text img{
	width: 2rem;
	height: 2.4rem;
	position: relative;
	top: -0.1rem;
}
</style>