<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      // swiper配置项
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  props: ['swiperList']
}
</script>

<style lang="stylus" scoped>
// 当要设置插件样式的时候,需要用到样式渗透
.swiper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper {
  // 用来解决高度为0时的抖动问题
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 31.25%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
