<template>
  <div class="post">
    <div class="l-header">
      <div class="l-header-left">
        <h1 v-text="date" class="l-header-left-left"></h1>
        <div class="l-header-left-right">
          <p v-text="day"></p>
          <p v-text="month"></p>
        </div>
        <div class="l-header-left-bottom">
            <p>深圳：多云 17℃</p>
            <span>></span>
        </div>
      </div>
      <img src="../assets/active-logo.png" alt="" class="l-header-right">
    </div>
    <div class="l-list">
     <swiper :options="swiperOption">
        <swiper-slide>
          <ul class="l-list1">
            <li v-for="item in getItems1">
              <img src="../assets/logo.png" alt="">
              {{item.text}}
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="l-list2">
            <li v-for="item in getItems2">
              <img src="../assets/active-logo.png" alt="">
              {{item.text}}
            </li>
           </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
     </swiper>   
    </div>
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'


export default {
  name: 'Post',
  computed:{
    ...mapGetters([
      'getItems1',
      'getItems2', // 发布页按钮
    ]),
    date(){
      const today = String(new Date().getDate());
      if(today.length==1){
        return '0'+new Date().getDate()
      }else{
        return new Date().getDate()
      }
    },
    day(){
      const dday = new Date().getDay();
      switch(dday){
        case 0:
        return '星期日';
        break;
        case 1:
        return '星期一';
        break;
        case 2:
        return '星期二';
        break;
        case 3:
        return '星期三';
        break;
        case 4:
        return '星期四';
        break;
        case 5:
        return '星期五';
        break;
        case 6:
        return '星期六';
        break;
      }
    },
    month(){
      return new Date().getMonth()+1+'/'+new Date().getFullYear()
    }
  },
  data () {
    return {
      swiperOption:{
        setWrapperSize :true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
      },
    }
  },
  components:{swiper,swiperSlide}
}
</script>

<style scoped>
.post{
  width: 100%;
}
.l-header{
  width: 100%;
  height: 10rem;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
}
.l-header .l-header-left{
  width: 40%;
  height: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.l-header .l-header-right{
  width: 10rem;
  height: 10rem;
}
.l-header-left-left{
  font-size: 3rem;

}
.l-header-left-right{
  font-size: 1rem;
  position: relative;
  left: -1rem;
}
.l-header-left-bottom{
  width: 90%;
  display: flex;
  align-items: baseline;
}
.l-header-left-bottom p{
  flex: 6;
  font-size: 0.8rem;
  margin-top: 0;
}
.l-header-left-bottom span{
  flex: 2;
  position: relative;
  animation: move 3s ease 0s infinite normal running;
}
@-webkit-keyframes move{
  0%{left: 0;}
  50%{left: 10px;}
  100%{left: 0;}
}
.l-list{
  width: 100%;
  height: 50%;
  overflow: hidden;
  position: absolute;
  bottom: 3rem;
}
.l-list1,.l-list2{
  display: inline-flex;
  width: 100%;
  height: 80%;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: flex-start;
}
.l-list ul li{
  width: 24.87%;
  height: 50%;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
.l-list ul li img{
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
.l-list .swiper-container{
  height: 100%;
}
.l-list .swiper-container .swiper-pagination{
  position: relative;
  top: -3rem;
}
.l-list .swiper-container .swiper-pagination .swiper-pagination-bullet{
  background-color: orange;
  width: 0.4rem;
  height: 0.4rem;
}
</style>
