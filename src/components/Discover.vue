<template>
  <div class="discover">
    <search-box isGrey pl="大家正在搜：四季衣服同穿戴"></search-box>
    <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../assets/banner1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/banner2.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> 
    <div class="icon-list">
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon>
        <img src="../assets/banner1.jpg" alt="" slot="icon-photo">
        <span slot="icon-title">夺宝</span>
      </discover-icon>
      <discover-icon @touchstart.native="loadmoreBtn" id="loadBtn">
        <img src="../assets/banner2.jpg" alt="" slot="icon-photo" :class="{'rotateBtn':isShow}">
        <span slot="icon-title">更多</span>
      </discover-icon>
        <transition name="fade">
          <div class="hide-btn" id="hide-btn" v-show="isShow">
              <discover-icon v-for="item in getBtnList">
                <img src="../assets/banner2.jpg" alt="" slot="icon-photo">
                <span slot="icon-title">{{item.title}}</span>
              </discover-icon>
          </div>
        </transition>
    </div>
    <div class="label-box">
      <span>
        <img src="../assets/active-logo.png" alt="">
        #无限挑战卢宏哲回归带来惊喜#
      </span>
      <span>
        <img src="../assets/active-logo.png" alt="">
        #无限挑战卢宏哲回归带来惊喜#
      </span>
      <span>
        <img src="../assets/active-logo.png" alt="">
        #无限挑战卢宏哲回归带来惊喜#
      </span>
      <span>
        <img src="../assets/active-logo.png" alt="">
        #无限挑战卢宏哲回归带来惊喜#
      </span>
    </div>
    <div class="discover-weibo" ref="dw">
      <div class="discover-box">
        <discoverBar @touchstart.native="turnToRead('headline')">
          <span slot="item-title" :class="{'bold':choose=='headline'}">头条</span>
          <div slot="item-line" v-show="choose=='headline'"></div>
        </discoverBar>
        <discoverBar @touchstart.native="turnToRead('hot')">
          <span slot="item-title" :class="{'bold':choose=='hot'}">热点</span>
          <div slot="item-line" v-show="choose=='hot'"></div>
        </discoverBar>
        <discoverBar @touchstart.native="turnToRead('billboard')">
          <span slot="item-title" :class="{'bold':choose=='billboard'}">榜单</span>
          <div slot="item-line" v-show="choose=='billboard'"></div>
        </discoverBar>
        <discoverBar @touchstart.native="turnToRead('video')">
          <span slot="item-title" :class="{'bold':choose=='video'}">视频</span>
          <div slot="item-line" v-show="choose=='video'"></div>
        </discoverBar>
      </div>
      <div class="discover-content">
        <div v-show="choose=='headline'">
          <weibo v-for="item in getHeadline" :normal=item.normal>
          <img src="../assets/active-logo.png" slot="head-icon" />
          {{item.username}}
          <p slot="content-p" class="content-p">{{item.content}}</p>
          <div slot="content-photo">
            <img src="../assets/logo.png" alt="">
            <img src="../assets/active-logo.png" alt="">
            <img src="../assets/active-logo.png" alt="">
            <img src="../assets/active-logo.png" alt="">
            <img src="../assets/active-logo.png" alt="">
          </div>
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
        <div v-show="choose=='hot'">
          <weibo v-for="item in getHot" :normal=item.normal>
          <img src="../assets/active-logo.png" slot="head-icon" />
          {{item.username}}
          <p slot="content-p" class="content-p">{{item.content}}</p>
          <div slot="content-photo">
            <img src="../assets/logo.png" alt="">
            <img src="../assets/active-logo.png" alt="">
            <img src="../assets/active-logo.png" alt="">
            <img src="../assets/active-logo.png" alt="">
            <img src="../assets/active-logo.png" alt="">
          </div>
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
        <div v-show="choose=='billboard'">
          <billboard v-for="item in getBillboardList">
            {{item.content}}
            <img src="../assets/banner2.jpg" alt="" slot="photo">
            <img src="../assets/banner2.jpg" alt="" slot="photo">
            <img src="../assets/banner2.jpg" alt="" slot="photo">
            <span slot="hotpoint" class="hotpoint" v-show="item.isHot">热点</span>
            <span slot="username">{{item.username}}</span>
            <span slot="commentnum">{{item.commentnum | chinese}}评论</span>
          </billboard>
        </div>
        <div v-show="choose=='video'">
          <videoBox v-for="item in getVideoList">
            <img src="../assets/banner1.jpg" alt="" slot="video">
            <span slot="playNum" id="playNum">{{item.playNum | chinese}}次播放</span>
            <span slot="time">{{item.time}}</span>
            {{item.content}}
            <span slot="content-label">{{item.label}}</span>
            <img src="../assets/active-logo.png" alt="" slot="video-usericon">
            <span slot="video-username">{{item.username}}</span>
            <span slot="commentNum">{{item.commentNum | chinese}}</span>
            <span slot="likeNum">{{item.likeNum | chinese}}</span>
          </videoBox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchBox from './smallComponents/search-box'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import discoverIcon from './smallComponents/discover-icon.vue'
import discoverBar from './smallComponents/discover-bar.vue'
import weibo from './smallComponents/weibo.vue'
import videoBox from './smallComponents/video.vue'
import billboard from './smallComponents/billboard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Discover',
  components:{searchBox,swiper,swiperSlide,discoverIcon,discoverBar,weibo,videoBox,billboard},
  computed:{
    ...mapGetters([
      'getBillboardList',// 头条信息
      'getVideoList',// 视频信息
      'getBtnList', // 隐藏的按钮信息
      'getHeadline',   //得到headline
      'getHot',   //得到hot
    ])
  },
  filters:{
    chinese:function(value){
      if(!value){
        return '0';
      }
      value = value+'';
      if(value.length<5){
        return value;
      }else{
        //var cvalue= value.split('').slice(0,-4).concat('万').join('');
        var c=value.split('');
        c.splice(-4,4,'万');
        return c.join('');
      }
    }
  },
  data () {
    return {
      swiperOption:{
        setWrapperSize :true,
        pagination : '.swiper-pagination',
        autoplay:5000,
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
      },
      isShow:false,
      choose:'headline',
    }
  },
  methods:{
    turnToRead:function(type){
      this.choose = type;   
      var dw = this.$refs.dw;
      var offsetT = dw.offsetTop;
      var timer = setInterval(function(){
        var speed = 5;
        if(document.body.scrollTop>=offsetT){
          clearInterval(timer);
        }else{
          document.body.scrollTop+=speed;
        }
      },5)
    },
    loadmoreBtn:function(){
      this.isShow = !this.isShow;
    },
    reachBottom:function(){
      var scrollT = document.body.scrollTop;
      var wholeH = document.body.scrollHeight;
      var clientH = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
      if(scrollT + clientH >= wholeH){
        if(this.choose=="headline"){

         console.log('触发加载');

         this.loadHeadline();

        }else if(this.choose=="hot"){

         console.log('触发加载');

         this.loadHot();

        }else if(this.choose=="billboard"){

        console.log('触发加载');

         this.loadBillboard();

        }else if(this.choose=="video"){
          
        console.log('触发加载');

         this.loadVideo();
        }
      }
    },
    loadHeadline:function(){
      if(this.getHeadline.length>=12) return;
      if(this.getHeadline.length<12){
        this.$store.dispatch('setLoading',true);
        setTimeout(()=>{
          this.$store.dispatch('setHeadlineMore',[...this.getHeadline,...this.getHeadline.slice(0,4)]);
          this.$store.dispatch('setLoading',false);
       },1000)
      }
    },
    loadHot:function(){
      if(this.getHot.length>=12) return;
      if(this.getHot.length<12){
        this.$store.dispatch('setLoading',true);
        setTimeout(()=>{
          this.$store.dispatch('setHotMore',[...this.getHot,...this.getHot.slice(0,4)]);
          this.$store.dispatch('setLoading',false);
       },1000)
      }
    },
    loadBillboard:function(){
      if(this.getBillboardList.length>=12) return;
      if(this.getBillboardList.length<12){
        this.$store.dispatch('setLoading',true);
        setTimeout(()=>{
          this.$store.dispatch('setBillboardMore',[...this.getBillboardList,...this.getBillboardList.slice(0,4)]);
          this.$store.dispatch('setLoading',false);
       },1000)
      }
    },
    loadVideo:function(){
      if(this.getVideoList.length>=12) return;
      if(this.getVideoList.length<12){
        this.$store.dispatch('setLoading',true);
        setTimeout(()=>{
          this.$store.dispatch('setVideoMore',[...this.getVideoList,...this.getVideoList.slice(0,4)]);
          this.$store.dispatch('setLoading',false);
       },1000)
      }
    }
  },
  mounted:function(){
    window.addEventListener('scroll',this.reachBottom,false);
  },
  beforeDestroy:function(){
    window.removeEventListener('scroll',this.reachBottom,false);
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.discover{
  background-color: #e6e6e6;
  padding-bottom: 6rem;
}
.discover .swiper-container .swiper-wrapper .swiper-slide img{
  width: 100%;
  height: 7rem;
}
.discover .swiper-container{
  position: relative;
}
.discover .swiper-container .swiper-pagination{
  display: flex;
  justify-content: flex-end;
}
.discover .swiper-container .swiper-pagination .swiper-pagination-bullet{
  background-color: white;
  width: 0.4rem;
  height: 0.4rem;
}
.discover .icon-list{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.discover .icon-list>.hide-btn{
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
}
.discover .label-box{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  background-color: white;
}
.discover .label-box>span{
  width: 50%;
  height: 2.5rem;
  padding: 0.5rem;
  box-sizing:border-box;
  border-top: 1px solid #e6e6e6;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.discover .label-box>span:nth-child(odd){
  border-right: 1px solid #e6e6e6;
}
.discover .label-box>span img{
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
}
.discover .discover-weibo{
  margin-top: 0.5rem;
  background-color: #e6e6e6;
}
.discover .discover-weibo .discover-box{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    box-sizing:border-box;
    padding: 0.2rem;
    border:1px solid #e6e6e6;
    position: relative;
    overflow: hidden;
    background-color: white;
}
</style>
