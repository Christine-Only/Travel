<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>测试</div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
</style>
