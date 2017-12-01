<template>
  <div id="app">

    <leftnav></leftnav>
    <div class="main">
      <router-view/>
    </div>  
  </div>
</template>

<script>  
import leftnav from '@/components/common/leftnav'
export default {
  name: 'app',
  components:{
    leftnav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
.main{
    width:93%;
    float:right;
    background-color: #EFF2F7;
    height:100%;
   overflow: auto;
}
</style>
