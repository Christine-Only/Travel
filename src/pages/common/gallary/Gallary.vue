<template>
  <div class="gallary">
    <swiper class="gallary-swiper" :options="swiperOption">
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallary >>> .swiper-container {
  overflow: inherit;
}

.gallary {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .gallary-swiper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .swiper-img {
      width: 100%;
    }

    .swiper-pagination {
      bottom: -1rem;
      color: #fff;
    }
  }
}
</style>
