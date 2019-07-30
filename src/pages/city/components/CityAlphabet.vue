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
      flag: false
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
      if (this.flag) {
        const startY = this.$refs['A'][0].offsetTop
        // console.log(startY)
        const endY = e.touches[0].pageY - 79
        // console.log(endY)
        const index = Math.floor(
          (endY - startY) / this.$refs['A'][0].offsetHeight
        )
        // 获取到当前元素的offsetTop
        if (index >= 0 && index < this.letters.length) {
          this.bus.$emit('change', this.letters[index])
        }
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
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }

  .active {
    color: red;
  }
}
</style>
