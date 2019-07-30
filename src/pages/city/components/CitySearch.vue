<template>
  <div class="search">
    <div class="city-search">
      <input class="search-input" v-model="keyWord" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li v-for="item in list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
        <li v-show="hasData" class="search-item border-bottom">暂无数据~</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  // 有关键词时,才显示符合条件的信息列表
  name: 'CitySearch',
  props: ['cities'],
  data () {
    return {
      keyWord: '',
      list: [],
      timerId: null
    }
  },
  computed: {
    hasData () {
      return !this.list.length
    }
  },
  watch: {
    keyWord (val) {
      if (this.timerId) clearTimeout(this.timerId)
      this.timerId = setTimeout(() => {
        const result = []
        if (!this.keyWord) {
          // 需要重置list的数据
          this.list = []
          return
        }
        for (let k in this.cities) {
          this.cities[k].forEach(v => {
            if (v.spell.indexOf(val) > -1 || v.name.indexOf(val) > -1) {
              result.push(v)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    // 页面元素挂载完,再操作dom
    // 获取dom元素
    // console.log(this.$refs.search)
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.city-search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0 0.1rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 1.58rem;
  background-color: #eee;
  z-index: 1;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>
