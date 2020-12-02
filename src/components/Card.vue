<template>
  <div class="card-container">
      <div class="card-wrapper">
          <div class="card-title">
              {{title}}
          </div>
          <div class="card-content" :style="{height: contentHeight + 'px'}">
            <slot></slot>
          </div>
      </div>
      <div class="card-background"></div>
      <div class="corner-container">
          <i></i><i></i><i></i><i></i>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            contentHeight: 0
        }
    },
    mounted () {
        this.contentHeight = this.$el.clientHeight - 60;
    }
}
</script>

<style lang="scss" scoped>
    .card-container{
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: #000 1px solid;

        .card-wrapper{
            position:absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: 2;

            .card-title{
                position: absolute;
                top: 0px;
                width: 100%;
                height: 60px;
                background-image: url(../assets/bgt.png);
                background-position: center 0px;
                background-repeat: no-repeat;
                text-align: center;
                font-size: 17px;
                font-family: Source Han Sans CN;
                color: #fff;
                line-height: 35px;
                letter-spacing: 2px;
                text-shadow: 0 0 10px #fff,
                0 0 20px  #fff,
                0 0 30px  #fff,
            }

            .card-content{
                position: absolute;
                top: 60px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        
        .card-background{
            position:absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: 1;
            background-color:#206ed4;
            opacity: .3;
        }

        .corner-container{
            & > i {
                position:absolute;
                width: 8px;
                height: 8px;
                border-width: 2px;
                border-color:#206ED4;
                border-style: solid;
                z-index:999;
            }

            & > i:nth-of-type(1) {
                top: -1px;
                left: -1px;
                border-right: none;
                border-bottom: none;
            }
            & > i:nth-of-type(2) {
                top: -1px;
                right: -1px;
                border-left: none;
                border-bottom: none;
            }
            & > i:nth-of-type(3) {
                bottom: -1px;
                left: -1px;
                border-right: none;
                border-top: none;
            }
            & > i:nth-of-type(4) {
                bottom: -1px;
                right: -1px;
                border-top: none;
                border-left: none;
            }
        }
    }
</style>