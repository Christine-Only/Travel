<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  created () {
    this.getCityList()
  },
  methods: {
    async getCityList () {
      const res = await this.axios.get('/api/city.json')
      const {
        status,
        data: { data }
      } = res
      if (status === 200) {
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
