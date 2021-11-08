<template>
  <el-row class="foot">
    <el-col :span="24">
      <!-- <img class="titleLogo" src="../assets/navLogo.png" alt="logo"> -->
      <div class="footTop">
         
         <div class="topT">
           <div>
            <p style="color:#fff;font-size:11px">重庆登康口腔护理用品股份有限公司</p>
            <div class="email">
              <div>咨询热线：400 023 7766</div>
              <div>电子邮箱：master@dencare.com.cn</div>
              <div>邮政编码：400025</div>
              <div>公司地址：重庆市江北区海尔路389号</div>
            </div>
           </div>
            <div class="sbItem">
              <img src="../assets/erwei.png" alt="">
              <p>关注公众号</p>
            </div>
         </div>
         <div class="topB"></div>
        <div class="shangbiao">
          <div style="padding-top:20px;">
            <div class="sbItem">
              <img src="../assets/tmall.png" alt="">
              <p>天猫旗舰店</p>
            </div>
            <div class="sbItem" style="margin-left:5px"> 
              <img src="../assets/jd.png" alt="">
              <p>京东旗舰店</p>
            </div>
          </div>
          <div class='links'>
            <div >网站地图</div>
            <div>员工通道</div>
            <div>加入我们</div>
            <div>隐私条款</div>
          </div>
        </div>
      </div>
      <div class="footBottom" >
        <div class="footBottomL">
          <p>渝ICP备12000840号-1 copyright ©2021 all rights reserved</p>
          <p> 重庆登康口腔护理用品股份有限公司 版权所有</p>
        </div>
          
      </div>
    </el-col>
    
  </el-row>
</template>

<script>
export default {
  name: "footerNav",
  data() {
    return {
      
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped >
.foot{
    background-color: #005BAB;
    position: relative;
}

.footTop {
  /* display: flex;
  justify-content: space-between; */
  height: 248px;
  padding: 10%  10% 0 10%;
}
ul {
  display: flex;
  width: 60%;
  justify-content: space-between;
  text-align: left;
}
ul li{
  color: #fff;
  font-size:20px ;
  font-weight:500 ;
  cursor: pointer;
}
.topT{
  display: flex;
  text-align: left;
  justify-content: space-between;
}
.email div,
.links div{
  margin-top: 9px;
  color: #90D1F9;
  font-size: 11px;
}
/* ul li:hover{
  color:#ECAC2B; ;
} */
ul li .menuSecond:nth-child(1){
  margin-top: 40px;
}
.menuSecond {
  cursor: pointer;
  color: #90D1F9;
  font-size: 16px;
  margin-top: 20px;
}
.menuSecond:hover{
  color: #ECAC2B;
}

.footBottom{
  /* padding: 0 10%; */
  background-color:#004078;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5FA9DE;
  line-height: 20px;
  font-size: 10px;
}
.footBottomL{
  /* display: flex;
  align-items: center; */
}
.footBottomR{
  display: flex;
  align-items: center;
  /* min-width: 500px; */
  justify-content: space-between;
}
.sbItem {
  color: #90D1F9;
  font-size: 11px;
  text-align: center;
  display: inline-block;
}
.sbItem img{
  width:53px;
  height: 53;
}
.sbItem img:hover{
  animation: shake .6s linear 3;
}
.shangbiao {
  display: flex;
  justify-content: space-between;
  /* width: 400px; */
}
.hide{
  display: none;
}
.circlrTag:hover .hide{
 display: block;
}

.circlrTag:hover .show{
 display: none;
}
.footBottomR div{
  cursor: pointer;
}

.footBottomR div:hover{
  color: #ECAC2B;
}
@keyframes shake{
  0% {transform:translate(-10px,0px) rotate(-2deg)}
  50% {transform:translate(0px,0px) rotate(0deg)}
  100% {transform:translate(10px,0px) rotate(2deg)}
}
</style>
