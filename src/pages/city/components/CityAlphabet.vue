<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      @touchstart="handleStart"
      @touchmove="handleMove"
      @touchend="handleEnd"
      @click="handleLetter"
      :class="{active: activeLetter === item}"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: ['cities'],
  data () {
    return {
      activeLetter: '',
      flag: false,
      startY: 0,
      timerId: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let k in this.cities) {
        letters.push(k)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetter (e) {
      // console.log(e)
      this.activeLetter = e.target.innerText
      this.bus.$emit('change', e.target.innerText)
    },
    handleStart () {
      this.flag = true
    },
    handleMove (e) {
      // 函数节流 提升网页性能
      if (this.timerId) clearTimeout(this.timerId)

      if (this.flag) {
        this.timerId = setTimeout(() => {
          const endY = e.touches[0].pageY - 79
          // console.log(endY)
          const index = Math.floor(
            (endY - this.startY) / this.$refs['A'][0].offsetHeight
          )
          // 获取到当前元素的offsetTop
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.bus.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleEnd () {
      this.flag = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    line-height: 0.34rem;
    text-align: center;
    color: $bgColor;
  }

  .active {
    color: red;
  }
}
</style>
