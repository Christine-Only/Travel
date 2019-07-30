<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recomend :recommendList="recommendList"></home-recomend>
    <home-weekend :weekendList="weekendList"></home-weekend>
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
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    city () {
      return this.$store.state.city
    }
  },
  methods: {
    async getList () {
      const res = await this.axios.get(`/api/index.json?city=${this.city}`)
      const {
        status,
        data: { data }
      } = res
      if (status === 200) {
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.weekendList = data.weekendList
        this.recommendList = data.recommendList
      }
    }
  },
  created () {
    this.getList()
    this.lastCity = this.city
    // console.log(this.lastCity)
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getList()
    }
  }
}
</script>

<style>
</style>
