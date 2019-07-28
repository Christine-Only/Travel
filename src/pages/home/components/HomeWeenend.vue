<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <div class="items" v-for="item in recomendList" :key="item.id">
      <img :src="item.imgUrl" />
      <div class="item">
        <p class="item-title one-cut">{{item.title}}</p>
        <p class="item-info one-cut">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecomend',
  data () {
    return {
      recomendList: [
        {
          id: 1,
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海迪士尼乐园',
          desc: '浪漫大连首战嘻嘻嘻'
        },
        {
          id: 2,
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海迪士尼乐园',
          desc: '浪漫大连首战嘻嘻嘻'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.weekend {
  .title {
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #eee;
    padding-left: 0.2rem;
  }

  .items {
    img {
      width: 100%;
      display: block;
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
    }
  }
}
</style>
