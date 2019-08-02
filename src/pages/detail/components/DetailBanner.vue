<template>
  <div class="detail-banner" @click="handleGallary">
    <img
      class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"
      alt
    />
    <div class="banner-info">
      <div class="banner-title">上海迪士尼乐园</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe698;</span>39
      </div>
    </div>
    <common-gallary v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailHeader',
  components: {
    CommonGallary
  },
  computed: {
    showGallary () {
      return this.$store.state.flag
    }
  },
  methods: {
    handleGallary () {
      this.$store.commit('changeFlag')
    }
  }
}
</script>

<style lang="stylus" scoped >
.detail-banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.1rem;
      padding: 0 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
