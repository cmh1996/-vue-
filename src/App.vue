<template>
  <div id="app">
    <transition-group name="router-fade" mode="out-in" v-show="loaded">
        <router-view :key="'router-view'"></router-view>
        <bottom-Tab v-model="select" :key="'tab'">
          <tab-item id="Homepage" isRouter>
            <img src="./assets/logo.png" alt="" slot="icon-normal" v-if="currentPage!='Homepage'">
            <img src="./assets/active-logo.png" alt="" slot="icon-active" v-if="currentPage=='Homepage'">
            <span class="tab-item-text" slot="tab-item-text" :class="{'is-active':currentPage=='Homepage'}">微博</span>
          </tab-item>
          <tab-item id="Messages" isRouter>
            <img src="./assets/logo.png" alt="" slot="icon-normal"v-if="currentPage!='Messages'">
            <img src="./assets/active-logo.png" alt="" slot="icon-active"v-if="currentPage=='Messages'">
            <span class="tab-item-text" slot="tab-item-text" :class="{'is-active':currentPage=='Messages'}">消息</span>
          </tab-item>
          <tab-item id="Post" isRouter noText>
            <img src="./assets/logo.png" alt="" slot="icon-normal"v-if="currentPage!='Post'">
            <img src="./assets/active-logo.png" alt="" slot="icon-active"v-if="currentPage=='Post'">
          </tab-item>
          <tab-item id="Discover" isRouter>
            <img src="./assets/logo.png" alt="" slot="icon-normal"v-if="currentPage!='Discover'">
            <img src="./assets/active-logo.png" alt="" slot="icon-active"v-if="currentPage=='Discover'">
            <span class="tab-item-text" slot="tab-item-text" :class="{'is-active':currentPage=='Discover'}">发现</span>
          </tab-item>
          <tab-item id="Myzone" isRouter>
            <img src="./assets/logo.png" alt="" slot="icon-normal"v-if="currentPage!='Myzone'">
            <img src="./assets/active-logo.png" alt="" slot="icon-active"v-if="currentPage=='Myzone'">
            <span class="tab-item-text" slot="tab-item-text" :class="{'is-active':currentPage=='Myzone'}">我</span>
          </tab-item>
    </bottom-Tab>
    </transition-group>
    <div class="jump" v-if="isLoading">
      <div class="jump1"></div>
      <div class="jump2">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ellipse"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import bottomTab from './components/smallComponents/bottom-tab'
import tabItem from './components/smallComponents/tab-item'
import mHead from './components/smallComponents/head'


export default {
  name: 'app',
  data(){
    return{
      select:''
    }
  },
  components:{bottomTab,tabItem,mHead},
  computed:{
    currentPage(){
      return this.$route.name;
    },
    isLoading(){
      return this.$store.getters.getloading;
    },
    loaded(){
      return this.$store.getters.getloaded;
    }
  },
  mounted(){
    this.$store.dispatch('setLoading',true);
    this.$store.dispatch('setLoaded',false);
    setTimeout(()=>{
      this.$store.dispatch('setLoading',false);
      this.$store.dispatch('setLoaded',true);
    },1000)
  },
}
</script>

<style src="./reset.css"></style>
<style>
.jump{
  width: 3rem;
  height: 5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -1.5rem;
  margin-top: -1.5rem;
}
.jump1{
  width: 3rem;
  height: 3rem;
  background:url(./assets/loading.png) no-repeat;
  background-size: 100% auto;
  background-position: 0 -3rem;
  position: absolute;
  -webkit-animation: loadanimate 5.6s steps(7) infinite,updown .8s infinite;
  animation: loadanimate 5.6s steps(7) infinite,updown .8s infinite;
}
.jump2{
  width: 3rem;
  height: 1rem;
  position: absolute;
  bottom: 0;
}
.jump2 svg{
  width: 3rem;
  height: 1rem;
  -webkit-animation: shadow 0.8s infinite;
  animation: shadow 0.8s infinite; 
}
@-webkit-keyframes loadanimate{
  0%{
    background-position: 0 0rem;
  }
  100%{
    background-position: 0 -21rem;
  }
}
@keyframes loadanimate{
  0%{
    background-position: 0 0rem;
  }
  100%{
    background-position: 0 -21rem;
  }
}
@-webkit-keyframes updown{
  0%{
    -webkit-transform:translateY(0rem); 
  }
  50%{
    -webkit-transform:translateY(-1rem); 
  }
  100%{
    -webkit-transform:translateY(0rem); 
  }
}
@keyframes updown{
  0%{
    transform:translateY(0rem); 
  }
  50%{
    transform:translateY(-1rem); 
  }
  100%{
    transform:translateY(0rem); 
  }
}
@-webkit-keyframes shadow{
  0%{
    -webkit-transform:translateY(0rem) scale(1); 
  }
  50%{
    -webkit-transform:translateY(.2rem) scale(0.5); 
  }
  100%{
    -webkit-transform:translateY(0rem) scale(1); 
  }
}
@keyframes shadow{
  0%{
    transform:translateY(0rem) scale(1); 
  }
  50%{
    transform:translateY(.2rem) scale(0.5); 
  }
  100%{
    transform:translateY(0rem) scale(1); 
  }
}
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .2s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
