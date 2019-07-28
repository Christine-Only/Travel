<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recomend></home-recomend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecomend from './components/HomeRecomend'
import HomeWeekend from './components/HomeWeenend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecomend,
    HomeWeekend
  }
}
</script>

<style>
</style>
