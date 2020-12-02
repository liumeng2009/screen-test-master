<template>
  <div id="app">
    <Head>大数据预警平台</Head>
    <div class="container">
      <div class="left-wrapper">
        <div style="height:320px; margin-bottom: 16px">
          <Card :title="'数据统计'">
            <div class="today-count">
              <span class="title">今日军营人数</span>
              <span class="count" :style="{paddingLeft: allPersonLeft + 'px'}">{{ allPerson }}</span>
            </div>
            <div class="split"></div>
            <div class="today-count warning">
              <span class="title">今日报警总数</span>
              <span class="count" :style="{paddingLeft: warningPersonLeft + 'px'}">{{ warningPerson }}</span>
            </div>
            <div class="total-wrapper">
              <div class="total-item">
                <span>违规APP使用预警</span>
                <span>42</span>
              </div>
              <div class="split2"></div>
              <div class="total-item">
                <span>违规出行预警</span>
                <span>12</span>
              </div>
            </div>
          </Card>
        </div>
        <div style="height: 485px">
          <Card :title="'违规情况'">
            <ThreeDBar />
          </Card>
        </div>
      </div>
      <div class="center-wrapper">
        <div style="height: 320px; margin-bottom: 16px">
          <Card :title="'地图围栏'">
            <CityMap />
          </Card>
        </div>
        <div style="height:485px">
          <Card :title="'士兵预警详情'">
            <div class="maque-container">
              <div class="maque-title">
                <div class="maque-item">
                    <span>姓名</span>
                    <span>手机号</span>
                    <span>时间</span>
                    <span>报警原因</span>
                </div>
                <div class="maque-title-background"></div>
              </div>
              <div
                class="maque-content"
                :style="{height: maqueContainrHeight + 'px'}"
                v-maque="{ speed: 5, count: dataSource.length, containerHeight: maqueContainrHeight, itemHeight: maqueItemHeight }">
                <div class="maque-move-area" :style="{top:0, height: ( maqueItemHeight * dataSource.length ) + 'px'}">
                  <div class="maque-item" v-for="(item, key) in dataSource" :key="key">
                    <span>{{ item.name }}</span>
                    <span>{{ item.phone }}</span>
                    <span>{{ item.time }}</span>
                    <span>{{ item.reason }}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div class="right-wrapper">
        <div style="height: 320px; margin-bottom: 16px">
          <Card :title="'违规APP'">
            <Pie />
          </Card>
        </div>
        <div style="height: 485px;">
          <Card :title="'位置异常'">
            <HoriLine />
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Head, Card, ThreeDBar, Pie, HoriLine, CityMap } from '@/components'
import { Maque } from '@/directive'

const maqueData = [
  { id: 1, name: '李大宇1', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' },
  { id: 2, name: '李大宇2', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' },
  { id: 3, name: '李大宇3', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' },
  { id: 4, name: '李大宇4', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' },
  { id: 5, name: '李大宇5', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' },
  { id: 6, name: '李大宇6', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' },
  { id: 7, name: '李大宇7', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' },
  { id: 8, name: '李大宇8', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' },
  { id: 9, name: '李大宇9', phone: '15516617788', time: '12/2 09:28:55', reason: '违规出行' }
];

export default {
  name: 'App',
  components: {
    Head,
    Card,
    ThreeDBar,
    Pie,
    HoriLine,
    CityMap
  },
  directives: {
    Maque
  },
  data () {
    return {
      allPerson: 1635,
      warningPerson: 455,
      dataSource: [],
      maqueContainrHeight: 485 - 60 - 40 * 2,
      maqueItemHeight: 40
    }
  },
  mounted() {
    setTimeout(() => {
      this.dataSource = maqueData
    }, 2000)
  },
  computed: {
    allPersonLeft () {
      const numLength = this.allPerson.toString().length;
      return 9 + (4 - numLength) * 29;
    },
    warningPersonLeft () {
      const numLength = this.warningPerson.toString().length;
      return 9 + (4 - numLength) * 29;
    }
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft YaHei';
  background-image: url('./assets/bg.png');
  background-position: center center;
  background-repeat: no-repeat;
}

.container{
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: space-between;

  .left-wrapper, .right-wrapper{
    width: 408px;
    height: 100%;
  }

  .center-wrapper{
    width: calc(100% - 816px);
    padding: 0px 16px;
    height: 100%;
  }
}

.today-count{
  width: 250px;
  display: flex;
  align-items: center;

  .title{
    width: 50%;
    padding: 0px 8px;
    font-size: 16px;
    box-sizing: border-box;
    color: #fff;
    font-family: Source Han Sans CN;
    text-shadow:  0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff;
  }
  
  .count {
    width: 116px;
    height: 44px;
    line-height: 44px;
    font-size: 20px;
    box-sizing: border-box;
    background-image: url('./assets/k1.png');
    background-repeat: repeat-x;
    color: #fff;
    text-shadow:  0 0 5px #fff,
                0 0 10px  #fff,
                0 0 15px  #fff;
    letter-spacing: 17px;
  }

  &.warning{

    .title{
      color:#fff;
      text-shadow:  0 0 5px #ff0000,
            0 0 10px  #ff0000,
            0 0 15px  #ff0000;
    }

    .count{
      text-align: right;
      background-image: url('./assets/k2.png');
    }
  }
}

.split{
  position:relative;
  width: 400px;
  height: 1px;
  margin: 20px 0px;
}
.split::before{
  content: '';
  position:absolute;
  background: linear-gradient(-90deg, #007EFB 0%, rgba(1, 118, 236, 0) 100%);
  width: 200px;
  height: 1px;
  top:0;
  left:0;
}
.split::after{
  content: '';
  position:absolute;
  background: linear-gradient(90deg, #007EFB 0%, rgba(1, 118, 236, 0) 100%);
  width: 200px;
  height: 1px;
  top: 0;
  right: 0;
}

.split2{
  position:relative;
  width: 1px;
  height: 76px;
}
.split2::before{
  content: '';
  position:absolute;
  background: linear-gradient(0deg, #007EFB 0%, rgba(1, 118, 236, 0) 100%);
  width: 1px;
  height: 38px;
  top:0;
  left:0;
}
.split2::after{
  content: '';
  position:absolute;
  background: linear-gradient(180deg, #007EFB 0%, rgba(1, 118, 236, 0) 100%);
  width: 1px;
  height: 38px;
  top: 38px;
  left: 0;
}

.total-wrapper{
  width: 100%;
  display: flex;
  margin: 30px 0px 48px 0px;

  .total-item{
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span:nth-of-type(1) {
      font-size: 16px;
      color:#fff;
      text-shadow:  0 0 5px #FBC019,
            0 0 10px  #FBC019,
            0 0 15px  #FBC019;
      margin-bottom: 4px;
    }
    & > span:nth-of-type(2) {
      font-size: 30px;
      color:#FBC019;
      text-shadow:  0 0 5px #FBC019,
            0 0 10px  #FBC019,
            0 0 15px  #FBC019;
    }
  }
}

.maque-container {
  width: 100%;
  padding: 0px 32px;
  box-sizing: border-box;
  position: relative;

  .maque-content {
    width: 100%;
    overflow: hidden;
    position: relative;

    .maque-move-area{
      position:absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
  }

  .maque-title {
    position:relative;
    width: 100%;
    overflow: hidden;
    z-index: 2;

    .maque-title-background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #206ED4;
      opacity: .3;
      z-index: 1
    }

    .maque-item::after {
      background: transparent;
    }
  }
}

.maque-item {
  position:relative;
  height: 40px;
  line-height: 40px;
  width: 100%;
  color: #07DBFF;

  & > span {
    width: 25%;
    position: relative;
    z-index: 2;
    display: inline-block;
    white-space: nowrap;
    font-size: 16px;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 8px;
  }
}

.maque-item:nth-child(2n)::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #206ED4;
  opacity: .3;
  z-index: 1
}

.react-has-dot::before {
  content: '';
  position:absolute;
  width: 0px;
  height: 0px;
  border: transparent 6px solid;
  border-left:#07DBFF 6px solid;
  top: 27px;
  left: -10px;
}
.react-has-dot::after {
  content: '';
  position:absolute;
  width: 0px;
  height: 0px;
  border: transparent 6px solid;
  border-right:#07DBFF 6px solid;
  top: 27px;
  right: -8px;
}
</style>
