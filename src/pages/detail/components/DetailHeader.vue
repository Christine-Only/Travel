<template>
  <div class="detail-header">
    <router-link to="/" class="header-back" v-show="shouHeader">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    <div class="header-title" v-show="!shouHeader" :style="{opacity: opacity}">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont header-left-back">&#xe624;</span>
        </div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shouHeader: true,
      opacity: 0
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacity = opacity
        this.shouHeader = false
      } else {
        this.shouHeader = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-back {
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  text-align: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.3rem;
  color: #fff;
}

.header-title {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
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

    .header-left-back {
      font-size: 0.4rem;
      display: block;
      text-align: center;
    }
  }
}
</style>
