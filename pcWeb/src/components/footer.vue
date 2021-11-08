<template>
  <el-row class="foot">
    <el-col :span="24">
      <!-- <img class="titleLogo" src="../assets/navLogo.png" alt="logo"> -->
      <div class="footTop">
         <ul>
          <li class="" v-for="(item,i) in menus" :key="i">
            {{ item.name }}
            <div class="menuSecond" v-for="(jtem,j) in item.children" :key="j" >{{ jtem.name }}</div>
          </li>
        </ul>
        <div class="shangbiao">
          <div class="sbItem">
            <img src="../assets/erwei.png" alt="">
            <p>扫一扫关注我们</p>
          </div>
          <div class="sbItem">
            <img src="../assets/tmall.png" alt="">
            <p>冷酸灵天猫旗舰店</p>
          </div>
          <div class="sbItem">
            <img src="../assets/jd.png" alt="">
            <p>冷酸灵京东旗舰店</p>
          </div>
        </div>
      </div>
      <div class="footBottom" >
        <div class="footBottomL">
          <p>渝ICP备12000840号-1 </p>
          <p style="margin-left:20px">copyright ©2021 all rights reserved 重庆登康口腔护理用品股份有限公司 版权所有</p>
        </div>
        <div class="footBottomR">
          <div class="circlrTag">
            <img class="show" src="../assets/wxShow.png" alt="">
            <img class="hide" src="../assets/wxHide.png" alt="">
          </div>
          <div class="circlrTag">
            <img class="show" src="../assets/wbShow.png" alt="">
            <img class="hide"  src="../assets/wbHide.png" alt="">
          </div>
          
          
          <div >网站地图</div>
          <div>员工通道</div>
          <div>加入我们</div>
          <div>隐私条款</div>
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
      menus:[
        {
          name:'新闻动态',
          children:[
            {
              name:'新闻资讯',
            },
            {
              name:'热点活动',
            },
            {
              name:'广告欣赏',
            }
          ]
        },
        {
          name:'品牌与产品',
          children:[
            {name:'品牌价值'},
            {name:'产品信息'}
          ]
        },
        {
          name:'研发与创新',
          children:[
            {name:'抗敏感实验室'},
            {name:'口腔科普'},
            {name:'爱牙互动'}
          ]
        },
        {
          name:'社会责任',
          children:[
            {name:'社会责任'}
          ]
        },
        {
          name:'投资者关系',
          children:[
            {name:'投资者互动'},
            {name:'投资者关系'},
            {name:'公司公告'},
            {name:'集团财报'},
            {name:'信息披露'}
          ]
        },
        {
          name:'党建工作',
          children:[
            {name:'党建要闻'},
            {name:'党建常识'},
            {name:'基层动态'}
          ]
        },
        {
          name:'关于我们',
          children:[
            {name:'企业简介'},
            {name:'英才计划'},
            {name:'联系我们'}
          ]
        },
      ]
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
  display: flex;
  justify-content: space-between;
  height: 463px;
  padding: 5%  10% 0 10%;
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
  padding: 0 10%;
  background-color:#004078;
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 16px;
}
.footBottomL{
  display: flex;
  align-items: center;
}
.footBottomR{
  display: flex;
  align-items: center;
  min-width: 500px;
  justify-content: space-between;
}
.sbItem {
  color: #90D1F9;
  font-size: 16px;
}
.sbItem img{
  width:102px;
  height: 102px;
}
.sbItem img:hover{
  animation: shake .6s linear 3;
}
.shangbiao {
  display: flex;
  justify-content: space-between;
  width: 400px;
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
