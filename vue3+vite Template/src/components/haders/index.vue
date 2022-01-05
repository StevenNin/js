<template>
  <div class="hade">
    <div><img class="login" src="@/assets/images/zmxtlogo.png" alt="" srcset="" /></div>
    <div></div>
    <div>
      <p class="time">{{ getWeekDate.haderTiem.time }}</p>
      <p class="date">{{ getWeekDate.haderTiem.day }} {{ getWeekDate.haderTiem.dateTime }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'haders',
  setup(props, context) {
    let getWeekDate = reactive({
      haderTiem: {},
    });
    const PaddingBytes = function (n) {
      return n <= 9 ? '0'.concat(n) : n;
    };
    /**
     * 获取周几
     * @returns string
     */
    const getWeekDateFunc = () => {
      let date = new Date();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();

      let weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'),
        dateTime = `${date.getFullYear()}/${PaddingBytes(month)}/${PaddingBytes(strDate)}`,
        time = `${PaddingBytes(hour)}:${PaddingBytes(minute)}:${PaddingBytes(second)}`,
        day = weeks[date.getDay()];
      return { dateTime, time, day };
    };

    getWeekDate.haderTiem = getWeekDateFunc();
    setInterval(() => {
      getWeekDate.haderTiem = getWeekDateFunc();
    }, 1000);

    return {
      getWeekDate,
    };
  },
};
</script>

<style lang="scss">
.login {
  width: 271px;
  height: 63px;
}
.hade {
  width: 100vw;
  display: flex;
  position: fixed;
  align-items: center;
  top: 25px;
  div:nth-child(1) {
    margin-left: 41px;
  }
  div:nth-child(2) {
    width: 70%;
  }
  div:nth-child(3) {
    text-align: start;
    line-height: 0px;
    .time {
      font-size: 36px;
      font-family: FZHei-B01;
      font-weight: 400;
      color: #ffffff;
    }
    .date {
      font-size: 24px;
      font-family: FZHei-B01;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>