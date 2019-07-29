<template>
  <ul class="list">
    <li class="item" v-for="(value,name,index) in cities" :key="index">{{name}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: ['cities']
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
}
</style>
