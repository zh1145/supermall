<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-views :recommends="recommends"></recommend-views>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from './childComps/HomeSwiper.vue';
  import RecommendViews from './childComps/RecommendViews.vue';

  import {getHomeMultidata} from 'network/home.js';

  // import Swiper from 'components/common/swiper/Swiper.vue'
  // import SwiperItem from 'components/common/swiper/SwiperItem.vue'

  export default{
    name:'Home',
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendViews
    },
    created(){
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list

      })
    }
  }
</script>

<style scoped>
  .home-nav{
   background-color: #ff8d99;
   color: white;
  }
</style>
