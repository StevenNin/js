<template>
  <div class="btn-box">
    <!-- <el-button type="primary" icon="el-icon-arrow-up" @click="up"></el-button>
    <el-button
      type="primary"
      icon="el-icon-arrow-down"
      @click="down"
    ></el-button>
    <el-button
      type="primary"
      icon="el-icon-arrow-left"
      @click="left"
    ></el-button>
    <el-button
      type="primary"
      icon="el-icon-arrow-right"
      @click="right"
    ></el-button>
    <el-button type="primary" @click="ok">OK</el-button> -->

    <svg
      id="funcSvg"
      data-name="图层 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1568.21 1583.36"
    >
      <defs>
        <linearGradient
          id="未命名的渐变_43"
          x1="461.01"
          y1="405.22"
          x2="1521.49"
          y2="405.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#595757" stop-opacity="0.5" />
          <stop offset="1" stop-color="#727171" stop-opacity="0.5" />
        </linearGradient>
        <linearGradient
          id="未命名的渐变_43-2"
          x1="-3647.98"
          y1="315.86"
          x2="-2587.5"
          y2="315.86"
          gradientTransform="translate(96.26 -2133.39) rotate(-90)"
          xlink:href="#未命名的渐变_43"
        />
        <linearGradient
          id="未命名的渐变_43-3"
          x1="-3558.62"
          y1="-3793.14"
          x2="-2498.14"
          y2="-3793.14"
          gradientTransform="translate(-2037.13 -2229.65) rotate(180)"
          xlink:href="#未命名的渐变_43"
        />
        <linearGradient
          id="未命名的渐变_43-4"
          x1="550.37"
          y1="-3703.78"
          x2="1610.85"
          y2="-3703.78"
          gradientTransform="translate(-2133.39 -96.26) rotate(90)"
          xlink:href="#未命名的渐变_43"
        />
        <clipPath id="clip-path" transform="translate(-207.15 -200.24)">
          <rect
            class="cls-1"
            x="908"
            y="1578.13"
            width="166.5"
            height="120.89"
          />
        </clipPath>
        <clipPath id="clip-path-2" transform="translate(-207.15 -200.24)">
          <rect
            class="cls-1"
            x="908"
            y="293.38"
            width="166.5"
            height="120.89"
          />
        </clipPath>
        <clipPath id="clip-path-3" transform="translate(-207.15 -200.24)">
          <rect
            class="cls-1"
            x="298.17"
            y="901.1"
            width="120.89"
            height="166.5"
          />
        </clipPath>
        <clipPath id="clip-path-4" transform="translate(-207.15 -200.24)">
          <rect
            class="cls-1"
            x="1589.65"
            y="901.1"
            width="120.89"
            height="166.5"
          />
        </clipPath>
      </defs>
      <title>功能键</title>
      <path
        class="cls-2"
        @click="ok"
        d="M1411.05,984.34c0,231.85-188,419.81-419.8,419.81s-419.79-188-419.79-419.81S759.4,564.56,991.25,564.56,1411.05,752.5,1411.05,984.34Z"
        transform="translate(-207.15 -200.24)"
      />
      <path
        class="cls-2"
        d="M991.25,585a398.11,398.11,0,1,1-155.44,31.38A396.82,396.82,0,0,1,991.25,585m0-20.43c-231.85,0-419.79,187.94-419.79,419.78s187.94,419.81,419.79,419.81,419.8-188,419.8-419.81-188-419.78-419.8-419.78Z"
        transform="translate(-207.15 -200.24)"
      />
      <path
        class="cls-3"
        @click="up"
        d="M1511.43,445.67l-148.32,153.6a33.88,33.88,0,0,1-46.29,2.42,502.43,502.43,0,0,0-651.13,0,33.89,33.89,0,0,1-46.3-2.42L471.08,445.69a34,34,0,0,1,1.84-49C611.07,274.73,792.51,200.74,991.25,200.74a780.6,780.6,0,0,1,518.33,195.93A33.94,33.94,0,0,1,1511.43,445.67Z"
        transform="translate(-207.15 -200.24)"
      />
      <path
        class="cls-4"
        @click="left"
        d="M452.57,464.17l153.6,148.32a33.89,33.89,0,0,1,2.42,46.3,502.42,502.42,0,0,0,0,651.12,33.89,33.89,0,0,1-2.42,46.3L452.59,1504.53a34,34,0,0,1-49-1.85,783.6,783.6,0,0,1,0-1036.66A33.94,33.94,0,0,1,452.57,464.17Z"
        transform="translate(-207.15 -200.24)"
      />
      <path
        class="cls-5"
        @click="down"
        d="M471.07,1523l148.32-153.59a33.89,33.89,0,0,1,46.3-2.43,502.4,502.4,0,0,0,651.13,0,33.89,33.89,0,0,1,46.29,2.42L1511.43,1523a33.94,33.94,0,0,1-1.85,49C1371.44,1694,1190,1768,991.26,1768S611.07,1694,472.92,1572A34,34,0,0,1,471.07,1523Z"
        transform="translate(-207.15 -200.24)"
      />
      <path
        class="cls-6"
        @click="right"
        d="M1529.93,1504.53l-153.59-148.32a33.9,33.9,0,0,1-2.43-46.3,502.39,502.39,0,0,0,0-651.12,33.9,33.9,0,0,1,2.43-46.3l153.58-148.32a34,34,0,0,1,49,1.85c121.95,138.15,195.94,319.59,195.94,518.32s-74,380.19-195.92,518.34A34,34,0,0,1,1529.93,1504.53Z"
        transform="translate(-207.15 -200.24)"
      />
      <text class="cls-7" @click="ok" transform="translate(575.59 894.17)">OK</text>
      <path
        class="cls-8"
        d="M471.59,1557.67a33.48,33.48,0,0,0,11.09,20.69A780.65,780.65,0,0,0,1001,1774.27c198.74,0,380.18-74,518.33-195.93a33.51,33.51,0,0,0,11.08-20.72,33.81,33.81,0,0,1-11.08,30.06C1381.19,1709.62,1199.75,1783.6,1001,1783.6a780.6,780.6,0,0,1-518.33-195.91A33.72,33.72,0,0,1,471.59,1557.67Z"
        transform="translate(-207.15 -200.24)"
      />
      <g class="cls-9">
        <path
        @click="down"
          d="M1004.42,1692.24l66.69-87.37a16.58,16.58,0,0,0-13.2-26.65H924.56a16.59,16.59,0,0,0-13.19,26.65l66.69,87.37a16.58,16.58,0,0,0,26.36,0Zm0,0"
          transform="translate(-207.15 -200.24)"
        />
      </g>
      <g class="cls-10">
        <path
            @click="up"
          d="M1004.42,300.16l66.69,87.38a16.59,16.59,0,0,1-13.2,26.65H924.56a16.59,16.59,0,0,1-13.19-26.65l66.69-87.38a16.58,16.58,0,0,1,26.36,0Zm0,0"
          transform="translate(-207.15 -200.24)"
        />
      </g>
      <g class="cls-11">
        <path
        @click="left"
          d="M305,971.18l87.37-66.68A16.58,16.58,0,0,1,419,917.7v133.35a16.59,16.59,0,0,1-26.65,13.18L305,997.55a16.59,16.59,0,0,1,0-26.37Zm0,0"
          transform="translate(-207.15 -200.24)"
        />
      </g>
      <g class="cls-12">
        <path
        @click="right"
          d="M1703.76,971.18l-87.38-66.68a16.59,16.59,0,0,0-26.65,13.2v133.35a16.59,16.59,0,0,0,26.65,13.18l87.38-66.68a16.59,16.59,0,0,0,0-26.37Zm0,0"
          transform="translate(-207.15 -200.24)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "funcBtns",
  setup(props, ctx) {
    const ok = () => {
      console.log("ok");
      ctx.emit("okDo", true);
    };
    const up = () => {
      console.log("up");
      ctx.emit("upDo", true);
    };
    const down = () => {
      console.log("down");
      ctx.emit("downDo", true);
      // emit("downDo")
    };
    const left = () => {
        console.log("left");
      ctx.emit("leftDo", true);
    };
    const right = () => {
        console.log("right");
      ctx.emit("rightDo", true);
    };
    return {
      up,
      down,
      left,
      right,
      ok,
    };
  },
});
</script>

<style lang="scss" scoped>
.btn-box {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 50;
}
.cls-1 {
  fill: none;
}
.cls-2,
.cls-3,
.cls-4,
.cls-5,
.cls-6 {
  fill: #ffb820;
}
#funcSvg{
    width: 159px;
    cursor: pointer;
}
.cls-3,
.cls-4,
.cls-5,
.cls-6 {
  stroke-miterlimit: 10;
}
.cls-3 {
  stroke: url(#未命名的渐变_43);
}
.cls-4 {
  stroke: url(#未命名的渐变_43-2);
}
.cls-5 {
  stroke: url(#未命名的渐变_43-3);
}
.cls-6 {
  stroke: url(#未命名的渐变_43-4);
}
.cls-7 {
  font-size: 300px;
  font-family: SourceHanSansSC-Medium-GBpc-EUC-H, Source Han Sans SC;
}
.cls-8 {
  fill: #fff;
  opacity: 0.28;
}
.cls-9 {
  clip-path: url(#clip-path);
}
.cls-10 {
  clip-path: url(#clip-path-2);
}
.cls-11 {
  clip-path: url(#clip-path-3);
}
.cls-12 {
  clip-path: url(#clip-path-4);
}
</style>
