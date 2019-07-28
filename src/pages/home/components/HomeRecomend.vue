<template>
  <div class="recomend">
    <div class="title">热门推荐</div>
    <div class="items border-bottom" v-for="item in recommendList" :key="item.id">
      <img :src="item.imgUrl" />
      <div class="item">
        <p class="item-title one-cut">{{item.title}}</p>
        <p class="item-info one-cut">{{item.desc}}</p>
        <button>查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecomend',
  data () {
    return {}
  },
  props: ['recommendList']
}
</script>

<style lang="stylus" scoped>
.recomend {
  .title {
    margin-top: 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #eee;
    padding-left: 0.2rem;
  }

  .items {
    display: flex;
    height: 1.9rem;
    overflow: hidden;

    img {
      display: block;
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }

    .item {
      flex: 1;
      padding: 0.1rem;
      // 没设置宽度时,想要溢出显示省略号,只需要设置min-width:0
      min-width: 0;

      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
      }

      .item-info {
        line-height: 0.4rem;
        color: #ccc;
      }

      button {
        margin-top: 0.16rem;
        line-height: 0.44rem;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
        background-color: #ff9300;
      }
    }
  }
}
</style>
