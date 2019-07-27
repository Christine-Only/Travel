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
  data () {
    return {
      iconsList: [
        {
          id: 1,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: 2,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '水上乐园'
        },
        {
          id: 3,
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
          desc: '暑期大促'
        },
        {
          id: 4,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
          desc: '室内娱乐'
        },
        {
          id: 5,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: 6,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '水上乐园'
        },
        {
          id: 7,
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
          desc: '暑期大促'
        },
        {
          id: 8,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
          desc: '室内娱乐'
        },
        {
          id: 9,
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
          desc: '室内娱乐'
        }
      ]
    }
  },
  computed: {
    pages () {
      // 多页优化,一页只能放8个
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
