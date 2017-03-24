<template>
<div class="homepage">
  <m-head fixed>
      <span slot="left-btn1">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
        </svg>
      </span>
        <span @touchstart.stop="showGroup">
            {{username}}
        	<span id="arrow" :class="{'up':groupShow,'down':!groupShow}">></span>
        </span>
        <span slot="right-btn1" @touchstart.stop="showTip"></span>
    </m-head>
    <div class="group group-self" id="group" v-show="groupShow">
      <span>全部关注</span>
      <span>好友圈</span>
      <span>群微博</span>
	  <fieldset>
	  	<legend>我的分组</legend>
	  	<ul class="group-self">
	  		<li>特别关注</li>
	  		<li>CM_综艺</li>
	  		<li>CM_名人</li>
	  		<li>CM_新闻</li>
	  		<li>CM_生活</li>
	  		<li>CM_球足</li>
	  		<li>CM_足球</li>
	  		<li>CM_球球</li>
	  		<li>悄悄关注</li>
	  	</ul>
	  </fieldset>
	  <fieldset>
	  	<legend>其他</legend>
	  	<ul class="group-self">
	  		<li>周边微博</li>
	  	</ul>
	  </fieldset>
	  <div>编辑我的分组</div>
    </div>
    <div class="tooltip" id="tooltip" v-show="tipShow">
      <span>雷达</span>
      <span>扫一扫</span>
      <span>打车</span>
    </div>
    <div class="content" id="Hcontent" :style="'transform:translateY('+contentY+'rem);'">
      <refresh :refreshStage="refreshStageVal"></refresh>
      <search-box pl="搜索"></search-box>
      <div class="weibo-box">
      	<weibo v-for="item in getList" :normal=item.normal>
      		<img src="../assets/active-logo.png" slot="head-icon" />
      		{{item.username}}
      		<p slot="content-p" class="content-p">{{item.content}}</p>
      			<img src="../assets/logo.png" alt="" slot="content-photo"/>
      			<img src="../assets/active-logo.png" alt="" slot="content-photo"/>
      			<img src="../assets/active-logo.png" alt="" slot="content-photo"/>
      			<img src="../assets/active-logo.png" alt="" slot="content-photo"/>
      			<img src="../assets/active-logo.png" alt="" slot="content-photo"/>
      		<span slot="repost-name" class="repost-name">@{{item.repostName}}：</span>
			<span slot="repost-p" class="repost-p">{{item.repostP}}</span>
			<div class="repost-photo" slot="repost-photo">
				<img src="../assets/logo.png" alt="">
      			<img src="../assets/active-logo.png" alt="">
      			<img src="../assets/active-logo.png" alt="">
      			<img src="../assets/active-logo.png" alt="">
			</div>
      <img src="../assets/search2.png" alt="" slot="icon-repost"/>
			<span slot="num-repost">{{item.repostNum}}</span>
      <img src="../assets/search2.png" alt="" slot="icon-comment"/>
			<span slot="num-comment">{{item.commentNum}}</span>
      <img src="../assets/search2.png" alt="" slot="icon-like"/>
			<span slot="num-like">{{item.likeNum}}</span>
      	</weibo>
      </div>
    </div>
</div>
</template>

<script>
import mHead from './smallComponents/head'
import searchBox from './smallComponents/search-box'
import weibo from './smallComponents/weibo'
import { mapGetters } from 'vuex'
import refresh from './smallComponents/refresh'

export default {
	name:'Homepage',
	components:{mHead,searchBox,weibo,refresh},
	computed:{
    ...mapGetters([
      'getList', // 得到微博
    ]),
	},
  watch:{
   contentY:function(newVal){
       newVal = Number(newVal);
       if(this.isDowning){
         if(newVal<=5){
          this.refreshStageVal = 'down'
         }else if(newVal>5){
          this.refreshStageVal = 'limit'
         }
       }
    },
  },
	data(){
		return{
			groupShow:false,
			tipShow:false,
			username:'此路不通2010',
      isLoadingMore:false,
      refreshStageVal:'down',
      contentY:-2,
      isDowning:false,
		}
	},
	methods:{
    drawDown:function(){
      var _this = this;
      var startY = 0,
          moveY = 0,
          endY = 0;
      var content = document.getElementById('Hcontent');

      content.addEventListener('touchstart',function(e){
        _this.isDowning = true;
        startY = e.targetTouches[0].pageY;
      },false);

      content.addEventListener('touchmove',function(e){
        _this.isDowning = true;
        moveY = e.targetTouches[0].pageY;
        var dY = moveY-startY;
        var scrollT = document.body.scrollTop;
        if(dY>0 && scrollT==0){
          _this.contentY = dY*0.02;
        }
      },false);

      content.addEventListener('touchend',function(e){
       _this.isDowning = false;
       var currentStage = _this.refreshStageVal;
       if(currentStage == 'down'){
          _this.contentY = -2;
        }else if(currentStage == 'limit'){
          _this.contentY = 0;
          _this.refreshStageVal = 'loading';
          setTimeout(()=>{
            _this.contentY = -2;
            _this.refreshStageVal = 'down';
          },1000);
        }
      },false);
    },
    showTip:function(){
      this.tipShow = true;
    },
    hideTip:function(){
      var _this=this;
      var homepage = document.getElementsByClassName("homepage")[0];
      homepage.addEventListener('touchstart',function(e){
            if(e.target.parentNode.getAttribute("class").indexOf("tooltip")!=-1){
             return;
           }else{
              _this.tipShow = false;
             }
      },false)
   },
   showGroup:function(){
      this.groupShow = true;
    },
    hideGroup:function(){
      var _this=this;
      var homepage = document.getElementsByClassName("homepage")[0];
      homepage.addEventListener('touchstart',function(e){
             if(e.target.parentNode.getAttribute("class").indexOf("group-self")!=-1){
             	return;
             }else{
             	_this.groupShow = false;
             }
      },false)
   },
   reachBottom:function(){
    var scrollT = document.body.scrollTop;
    var wholeH = document.body.scrollHeight;
    var clientH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if(scrollT + clientH>=wholeH){
      console.log('触发加载');
      this.loadMore();
    }
   },
   loadMore:function(){
    if(this.getList.length>=12) return;
    if(this.isLoadingMore!=true){
      this.isLoadingMore=true;
      this.$store.dispatch('setLoading',true);
      setTimeout(()=>{
        if(this.getList.length<12){
        this.$store.dispatch('setHomepageMore',[...this.getList,...this.getList.slice(0,4)]);
      }
        this.isLoadingMore = false;
        this.$store.dispatch('setLoading',false);
      },1000) 
   }
   },
  },
  mounted:function(){
    this.hideTip();
    this.hideGroup();
      
    this.drawDown();

    setTimeout(() => {
      window.addEventListener('scroll',this.reachBottom,false);
    },0);

  },
  beforeDestroy:function(){
    window.removeEventListener('scroll',this.reachBottom,false)
  }
}

</script>

<style scoped>
.homepage{
  margin-bottom: 3rem;
  background-color: #e6e6e6;
  overflow: hidden;
  width: 100%;
}
.homepage .content{
  margin-top: 3rem;
}
.homepage .tooltip{
  width: 7rem;
  background-color: #595959;
  position: fixed;
  top: 3rem;
  right: 0.2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 19;
  border-radius: 0.6rem;
}
.homepage .tooltip:before{
  display: block;
  content: '';
  border-width: 0.5rem;
  border-style: solid;
  border-color: transparent transparent #595959 transparent;
  position: absolute;
  left: 74%;
  top: -0.85rem;
}
.homepage .tooltip span:last-child{
	border: none;
}
.homepage .tooltip span{
  border-bottom: 1px solid #212326;
  color: white;
  width: 100%;
  line-height: 3rem;
  background-image: url('../assets/logo.png');
  background-size: 18%;
  background-repeat:no-repeat;
  background-position: 0.3rem 0.7rem;
  padding-left: 2rem;
  box-sizing:border-box;
}
.homepage .header-right span{
  background-image: url("../assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.homepage .header-left span{
  background-size: contain;
  background-repeat: no-repeat;
}

#arrow{
   display: inline-block;
   color: orange;
   position: relative;
   top: 0.1rem;
}
.homepage .group{
  width: 12rem;
  background-color: #595959;
  position: fixed;
  top: 3rem;
  left: 50%;
  margin-left: -6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 19;
  border-radius: 0.6rem;
  height: 26rem;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing:border-box;
}
.homepage .group::-webkit-scrollbar{
     width: 0.4rem;
     margin: 1rem;
}
.homepage .group::-webkit-scrollbar-thumb{
     border-radius:5rem;
     background-color: rgba(0,0,0,0.3);
     height: 0.4rem;
}
.homepage .group:before{
  display: block;
  content: '';
  border-width: 0.5rem;
  border-style: solid;
  border-color: transparent transparent #595959 transparent;
  position: fixed;
  left: 50%;
  top: 2.1rem;
}
.homepage .group span:last-child{
	border: none;
}
.homepage .group span{
  color: white;
  width: 100%;
  line-height: 3rem;
  padding-left: 1rem;
  box-sizing:border-box;
}
.homepage .group fieldset {
 padding:1rem;
 color: white;
 width: 10rem;
 border:1px solid black;
 border-left:none;
 border-right:none; 
 border-bottom:none;  
} 
.homepage .group legend {
 color:black;
 font-size: 0.8rem;
}
.homepage .group fieldset ul li{
	height: 3rem;
}
.homepage .group div:last-child{
	color: white;
	background-color: #595959;
	border: 1px solid #212326;
	border-radius: 0.3rem;
	width: 11rem;
	height: 1.4rem;
	position: fixed;
	top: 27.5rem;
	text-align: center;
	left: 50%;
	margin-left: -5.5rem;
	z-index:20;
}
.up{
	transform: rotate(-90deg) scaleY(1.4);
}
.down{
	transform: rotate(90deg) scaleY(1.4);
}
</style>
