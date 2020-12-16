<template>
  <swiper>
    <swiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiperItem>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

  export default{
    name:"HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
</style>
