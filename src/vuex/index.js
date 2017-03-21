// vuex入口文件


import Vue from 'vue'
import Vuex from 'vuex'

//整合其他文件
import * as getters from './getters'
import * as actions from './action'
import * as mutations from  './mutations'

Vue.use(Vuex)

const state = {
  count:0
}

// 集合Vuex
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

// 输出整个vuex
export default store
