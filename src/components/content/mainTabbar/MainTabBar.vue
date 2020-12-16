<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!-- img使用别名前面要加波浪号~ -->
      <img slot='icon-img' src="~assets/img/tabbar/home.svg" alt="">
      <img slot='icon-img-active' src="~assets/img/tabbar/home-active.svg" alt="">
      <div slot='icon-txt'>首页</div>
    </tab-bar-item>
    <tab-bar-item path="/class">
      <img slot='icon-img' src="~assets/img/tabbar/class.svg" alt="">
      <img slot='icon-img-active' src="~assets/img/tabbar/class-active.svg" alt="">
      <div slot='icon-txt'>分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot='icon-img' src="~assets/img/tabbar/shopcar.svg" alt="">
      <img slot='icon-img-active' src="~assets/img/tabbar/shopcar-active.svg" alt="">
      <div slot='icon-txt'>购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot='icon-img' src="~assets/img/tabbar/profile.svg" alt="">
      <img slot='icon-img-active' src="~assets/img/tabbar/profile-active.svg" alt="">
      <div slot='icon-txt'>我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  export default{
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
