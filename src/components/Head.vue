<template>
  <div class="header">
      <div class="left-area"></div>
      <div class="title"><slot></slot></div>
      <div class="right-area"></div>
  </div>
</template>

<script>
export default {
    name: 'Head'
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;

        .left-area{
            width: 550px;
            height: 58px;
            background-image: url('../assets/l.png');
        }

        .right-area{
            width: 550px;
            height: 58px;
            background-image: url('../assets/r.png');
        }

        .title{
            width: 718px;
            height: 80px;
            background-image: url('../assets/z.png');
            line-height: 80px;
            font-size: 26px;
            text-align: center;
            color: #fff;
            text-shadow: 0 0 10px #fff,
               0 0 20px  #fff,
               0 0 30px  #fff,
        }
    }
</style>