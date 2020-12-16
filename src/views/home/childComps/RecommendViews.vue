<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'RecommendViews',
    props:{
      recommends:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    font-size: 16px;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 80%;
    /* height: 80%; */
    margin-bottom: 8px;
  }
  .recommend-title{
   color: #000000;
  }
</style>
