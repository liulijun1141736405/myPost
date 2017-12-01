<template>
   <div class="pos">
     <el-row>
       <el-col :span='7' class="post-order" id="order-col">
         我是订单栏
       </el-col>
       <el-col :span='17'>
         我是产品栏
       </el-col>
     </el-row>
   </div>
</template>

<script>
export default {
  name: 'pos',
   //渲染完之后执行
   mounted:function(){
     var orderHeight = document.body.clientHeight;
     document.getElementById("order-col").style.height=orderHeight+'px';
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
  .post-order{
    background:#fff;
  }
</style>
