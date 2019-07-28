<template>
  <div class="home">
    <!-- <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recomend :recommendList="recommendList"></home-recomend>
    <home-weekend :weekendList="weekendList"></home-weekend>-->
    <home-header :city="list.city"></home-header>
    <home-swiper :swiperList="list.swiperList"></home-swiper>
    <home-icons :iconList="list.iconList"></home-icons>
    <home-recomend :recommendList="list.recommendList"></home-recomend>
    <home-weekend :weekendList="list.weekendList"></home-weekend>
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
  },
  data () {
    return {
      // city: '',
      // swiperList: [],
      // iconList: [],
      // recommendList: [],
      // weekendList: []
      list: {}
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await this.axios.get('/api/index.json')
      const {
        status,
        data: { data }
      } = res
      if (status === 200) {
        // this.city = data.city
        // this.swiperList = data.swiperList
        // this.iconList = data.iconList
        // this.weekendList = data.weekendList
        // this.recommendList = data.recommendList
        this.list = data
      }
    }
  }
}
</script>

<style>
</style>
