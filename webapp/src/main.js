/*
 * @Author: your name
 * @Date: 2021-04-17 12:21:18
 * @LastEditTime: 2021-04-17 22:38:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /weatherapp/webapp/src/main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
