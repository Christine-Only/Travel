<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperSlides" :key="item.id">
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
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperSlides: [
        {
          id: '0001',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0645bd625b46216a55e3835d0f677ce2.jpg_750x200_1e9a0cbf.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/ae8987bff39ff10e82675a3643154e66.jpg_750x200_0f187b2e.jpg'
        }
      ]
    }
  }
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
  padding-bottom: 26.5%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
