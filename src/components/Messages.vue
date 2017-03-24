<template>
  <div class="business">
    <m-head fixed>
        <p slot="left-btn1">发现群</p>
        消息
        <span slot="right-btn1" @touchstart.stop="showTip"></span>
    </m-head>
    <div class="tooltip" id="tooltip" v-show="tipShow">
      <span>
        发起聊天
      </span>
      <span>
        私密聊天
      </span>
    </div>
    <div class="content">
      <search-box></search-box>
      <message v-for="msg in getMessages.slice(0,3)" main>
        <img src="../assets/active-logo.png" slot="msg-img">
        <p slot="headline">{{msg.headline}}</p>
      </message>
      <message v-for="msg in getMessages.slice(3)">
        <img src="../assets/active-logo.png" slot="msg-img">
        <p slot="headline">{{msg.headline}}</p>
        <p slot="content" class="msg-content">{{msg.content}}</p>
      </message>
    </div>
  </div>
</template>

<script>
import mHead from './smallComponents/head'
import searchBox from './smallComponents/search-box'
import message from './smallComponents/message'
import { mapGetters } from 'vuex'

export default {
  name: 'Messages',
  data () {
    return {
      tipShow:false,
    }
  },
  methods:{
    showTip:function(){
      this.tipShow = true;
    },
    hideTip:function(){
      var _this=this;
      var business = document.getElementsByClassName("business")[0];
      business.addEventListener('touchstart',function(e){
            if(e.target.parentNode.getAttribute("class").indexOf("tooltip")!=-1){
             return;
           }else{
              _this.tipShow = false;
             }
      },false)
   }
  },
  components:{mHead,searchBox,message},
  mounted:function(){
      this.hideTip()
  },
  computed:{
    ...mapGetters([
      'getMessages' // 得到消息
    ])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.business .content{
  margin-top: 3rem;
}
.business .tooltip{
  width: 7rem;
  height: 6rem;
  background-color: #595959;
  position: fixed;
  top: 3rem;
  right: 0.2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  z-index: 19;
  border-radius: 0.6rem;
}
.business .tooltip:before{
  display: block;
  content: '';
  border-width: 0.5rem;
  border-style: solid;
  border-color: transparent transparent #595959 transparent;
  position: absolute;
  left: 74%;
  top: -0.85rem;
}
.business .tooltip span:first-child{
  border-bottom: 1px solid #212326;
}
.business .tooltip span{
  color: white;
  width: 100%;
  height: 49%;
  line-height: 3rem;
  background-image: url('../assets/logo.png');
  background-size: 18%;
  background-repeat:no-repeat;
  background-position: 0.3rem 0.7rem;
  padding-left: 2rem;
  box-sizing:border-box;
}
.business .header-right span{
  width: 2rem;
  height: 2rem;
  background-image: url("../assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.business{
  margin-bottom: 3rem;
}
</style>
