<template>
  <div id="app">
    <!-- keep-alive 通常都是结合router-view使用,意味着会把router-view渲染的组件缓存起来
    作用:在内存中缓存组件
    -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
