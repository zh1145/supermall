<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
  export default{
    name:"NavBar"
  }
</script>

<style>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .left,.right{
    flex: 1;
    flex-shrink: 0;
    /* background-color: pink; */
  }
  .center{
    flex: 3;
    /* background-color: #0E9A00; */
  }
</style>
