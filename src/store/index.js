import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
思路:
1. 组件去派发一个dispatch 去调用actions
2. 在store中创建一个actions, 需要用一个和派发过来的参数一样的方法,有两个方法,一个是context,另一个是传递过来的参数

总结: 组件调用actions,actions调用mutations,mutations提交数据来更改state中的值
 */
let defaultCity = '上海'
try {
  if (localStorage.getItem('city')) {
    defaultCity = localStorage.getItem('city')
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    city: defaultCity,
    flag: false
  },
  actions: {
    changeCity (context, city) {
      context.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.setItem('city', city)
      } catch (e) {}
    },
    changeFlag (state) {
      state.flag = !state.flag
    }
  }
})
