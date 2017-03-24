<template>
  <div class="me">
    <m-head fixed>
        <p slot="left-btn1">添加好友</p>
        我
        <p slot="right-btn1">设置</p>
    </m-head>
    <div class="data">
      <div class="data-header">
        <div class="header-top">
          <img src="../assets/active-logo.png" class="header-top-left" />
          <div class="header-top-center">
            <span class="username">{{username}}</span>
            <span class="userintro">简介：{{userintro}}</span>
          </div>
          <div class="header-top-right">
            <img src="../assets/logo.png" alt="" />
            <span>{{userplace}}></span>
          </div>
        </div>
        <div class="header-bottom">
          <span class="header-btn">
            <span class="btn-up">{{weiboNum}}</span>
            <span class="btn-down">微博</span>
          </span>
          <span class="header-btn">
            <span class="btn-up">{{followNum}}</span>
            <span class="btn-down">关注</span>
          </span>
          <span class="header-btn">
            <span class="btn-up">{{fansNum}}</span>
            <span class="btn-down">粉丝</span>
          </span>
        </div>
      </div>
      <set :setIcon="item.icon" v-for="item in getSetList">
        <img src="../assets/active-logo.png" alt="" class="set-img" slot="set-img">
        <span class="set-title" slot="set-title">{{item.title}}</span>
        <span class="set-remark" slot="set-remark">{{item.remark}}</span>
        <span slot="set-icon" v-if="item.icon=='arrow'" id="set-arrow">></span>
        <span slot="set-icon" v-else-if="item.icon=='point'" id="set-point"></span>
        <span slot="set-icon" v-else-if="item.icon=='num'" id="set-num">{{item.waitNum}}</span>
      </set>
    </div>
  </div>
</template>

<script>
import mHead from './smallComponents/head'
import set from './smallComponents/set'
import { mapGetters } from 'vuex'

export default {
  name: 'me',
  components:{mHead,set},
  computed:{
    ...mapGetters([
      'getSetList', // 个人中心设置项
    ])
  },
  data () {
    return {
      username:'此路不通2010',
      userintro:'天堂有路你不走，学海无涯苦作舟无涯苦作舟无涯苦作舟无涯苦作舟无涯苦作舟',
      userplace:'普通用户',
      weiboNum:'1812',
      followNum:'333',
      fansNum:'177',
    }
  }
}
</script>


<style scoped>
.me{
  background-color: #e6e6e6;
  padding-top: 1rem;
  padding-bottom: 8rem;
}
.me .data .data-header{
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}
.me .data .data-header .header-top{
  width: 100%;
  display: flex;
  flex-flow: row nowrap; 
  align-items: center;
  padding: 0.5rem;
  box-sizing:border-box;
}
.me .data .data-header .header-top .header-top-left{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.me .data .data-header .header-top .header-top-center{
  flex: 1;
  height: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 0.6rem;
}
.me .data .data-header .header-top .header-top-center .userintro{
  font-size: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
   color: #a0a0a0;
}
.me .data .data-header .header-top .header-top-right{
  width: 5.5rem;
  display: flex;
  align-items: center;
}
.me .data .data-header .header-top .header-top-right img{
  width: 1.4rem;
  height: 1.4rem;
  display: inline-block;
}
.me .data .data-header .header-top .header-top-right span{
  font-size: 0.8rem;
  color: orange;
}
.me .data .data-header .header-bottom{
  width: 100%;
  border-top: 1px solid #e6e6e6;
  display: flex;
  padding: 0.5rem 0;
}
.me .data .data-header .header-bottom .header-btn{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.me .data .data-header .header-bottom .header-btn .btn-down{
  color: #a0a0a0;
  font-size: 0.8rem;
}
.me .data .set{
  margin-top: 0.6rem;
}
</style>
