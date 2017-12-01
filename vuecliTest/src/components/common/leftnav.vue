<template>
  <div class="leftnav">
     <ul>
         <li v-for="item in navitems">
             <i :class="item.className"></i>
             <div>{{item.name}}</div>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'leftnav',
  data () {
    return {
      msg: 'leftnav',
      navitems:[
        {
            name:"购物车",
            className:"icon iconfont icon-tianmaochaoshigouwuche"
        },
        {
            name:"会员卡",
            className:"icon iconfont icon-huiyuanqia"
        },
        {
            name:"商城",
            className:"icon iconfont icon-kafei"
        },
        {
            name:"活动",
            className:"icon iconfont icon-huodongyouxian"
        },
        {
            name:"设置",
            className:"icon iconfont icon-setup_fill"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #app{
        height:100%;
    }
.leftnav{
    float:left;
    height:100%;
    width:7%;
    background:#539be2;
    color:#fff;
    font-size:14px;
}
.leftnav ul{
    width:90%;
    margin:0 auto;
    text-align:center;    
    padding:0;
}
.leftnav li{
    margin-bottom:10px;
}
</style>
