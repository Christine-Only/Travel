<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button" @click="handleCity(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(city,name,index) in cities" :key="index">
        <div class="title border-topbottom" ref="letter">{{name}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="cname in city"
            :key="cname.id"
            @click="handleCity(cname.name)"
          >{{cname.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: ['cities', 'hotCities'],
  data () {
    return {
      letter: ''
    }
  },
  created (letter) {
    this.bus.$on('change', letter => {
      this.letter = letter
      // console.log(this.letter)
      // 通过ref找到符合条件的那一项
      let element = this.$refs.letter.find(v => v.innerText === letter)
      // console.log(this.scroll)
      this.scroll.scrollToElement(element)
    })
  },
  mounted () {
    // 把scroll这个对象挂载到当前组件上,只有在mounted阶段才能操作dom
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    })
  },
  computed: {
    city () {
      return this.$store.state.city
    }
  },
  methods: {
    handleCity (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.city-list {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 1.58rem;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        text-align: center;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    .item {
      padding-left: 0.2rem;
      line-height: 0.76rem;
    }
  }
}
</style>
