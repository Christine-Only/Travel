<template>
  <div class="city-header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont header-back">&#xe624;</span>
      </div>
    </router-link>城市选择
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.city-header {
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  background-color: $bgColor;
  color: #fff;
  text-align: center;
  font-size: 0.32rem;

  .header-left {
    position: absolute;
    width: 0.64rem;
    color: #fff;

    .header-back {
      font-size: 0.4rem;
      display: block;
      text-align: center;
    }
  }
}
</style>
