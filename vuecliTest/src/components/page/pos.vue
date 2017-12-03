<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="post-order" id="order-col">
        <el-tabs v-model="activeName"  type="border-card">
          <el-tab-pane label="点餐" name="first">
            <el-table  :data="tableData" border style="width: 100%">
              <el-table-column prop="goodsName" label="商品"></el-table-column> 
              <el-table-column prop="price" width="70" label="金额"></el-table-column>    
              <el-table-column prop="count" width="50" label="量"></el-table-column>    
              <el-table-column label="操作" width="100" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="delgoods(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addtableData(scope.row)">增加</el-button>
                  </template>
              </el-table-column>
            </el-table>              
              <div>
                数量：{{totalCount}}     价格：{{totalMoney}}
              </div>
            <div class="orderbtn">
              <el-button type="warning" size="mini">挂单</el-button>
              <el-button type="danger" size="mini">删除</el-button>
              <el-button type="success" size="mini">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
          </el-tab-pane>
          <el-tab-pane label="外卖">
          </el-tab-pane>
          
        </el-tabs>
      </el-col>
      <el-col :span='17'>
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="ofgoods in oftenGoods" @click="addtableData(ofgoods)">
                <span>{{ofgoods.goodsName}}</span>
                <span class="o-price">￥{{ofgoods.price}}元</span>
              </li>

            </ul>
          </div>
        </div>
      <div class="goods-type">
        <el-tabs>
          <el-tab-pane label="汉堡">
            <ul class='cookList'>
                <li  v-for="item in type0Goods" @click="addtableData(item)">
                    <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                </li>
            </ul>
          </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>
                  <li  v-for="item in type1Goods" @click="addtableData(item)">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
              </ul>
          </el-tab-pane>
          <el-tab-pane label="饮料">
            <ul class='cookList'>
                <li  v-for="item in type2Goods" @click="addtableData(item)">
                    <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="套餐">
            <ul class='cookList'>
                <li  v-for="item in type3Goods" @click="addtableData(item)">
                    <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      </el-col>
  </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'pos',
   data() {
      return {
        activeName: 'first',
        totalCount:0,
        totalMoney:0,
        tableData: [
        ],
        oftenGoods:[
         
        ],
        type0Goods:[
            
        ],
        type1Goods:[
            
        ],
        type2Goods:[
            
        ],
        type3Goods:[
            
        ],
        getAllMoney:function(){
           //总数量
        this.totalCount=0;
        //总价格
        this.totalMoney=0;
        this.tableData.forEach((e)=>{
           this.totalMoney+=e.count*e.price;
           this.totalCount+=e.count;
        })
        }
    }
   },
   //创建就执行
   created:function(){
     axios.get('http://jspang.com/DemoApi/oftenGoods.php')
     .then(response=>{
         this.oftenGoods=response.data
       })
     .catch(
       error=>{
          alert('网络错误，不能访问');
      }
     )
     axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(response=>{
        this.type0Goods=response.data[0];
        this.type1Goods=response.data[1];
        this.type2Goods=response.data[2];
        this.type3Goods=response.data[3];
       })
     .catch(
       error=>{
          alert('网络错误，不能访问');
      }
     )
   },
   //渲染完之后执行
   mounted:function(){
     var orderHeight = document.body.clientHeight;
     document.getElementById("order-col").style.height=orderHeight+'px';
   },
   
   methods:{
     addtableData:function(ofgoods){
        //已存在数量+1 不存在puch一条商品
        var isHave=false;
        this.tableData.forEach(function(e){
          if(e.goodsId==ofgoods.goodsId){
            isHave=true;
            return false;
          }
        })
        if(isHave){
          //存在数目+1
          var arr = this.tableData.filter(a=>a.goodsId==ofgoods.goodsId);
          arr[0].count++;
        }else{
          //puch一条商品
          var newGoods = {goodsId:ofgoods.goodsId,count:1,goodsName:ofgoods.goodsName,price:ofgoods.price};
           this.tableData.push(newGoods);
        }
        //计算
        this.getAllMoney();
     },
     delgoods:function(data){
          this.tableData=this.tableData.filter(e=>e.goodsId!=data.goodsId);
           this.getAllMoney();
     }
    }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
  .post-order{
    background:#fff;
  }
  .orderbtn{
    margin-top:20px;
  }
  .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
   .often-goods{
     overflow:hidden;
   }
   .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
  .o-price{
      color:#58B7FF; 
   }
.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
