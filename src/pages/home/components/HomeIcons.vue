<template>
  <div class="icons">
    <swiper class="swiper">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img :src="item.imgUrl" alt />
          <p class="one-cut">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['iconList'],
  data () {
    return {
      list: []
    }
  },
  computed: {
    pages () {
      // 多页优化,一页只能放8个
      // console.log(this.iconList)
      const pages = []
      this.list.map((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  watch: {
    iconList (val) {
      this.list = val
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/minins.styl';

.icons >>> .swiper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
}

.icon {
  width: 25%;
  height: 0;
  overflow: hidden;
  padding-bottom: 25%;
  text-align: center;
  color: $textColor;
  float: left;

  img {
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0.1rem auto;
  }

  p {
    // ellipsis();
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
  }
}
</style>
