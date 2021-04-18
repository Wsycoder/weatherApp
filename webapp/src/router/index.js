/*
 * @Author: your name
 * @Date: 2021-04-17 12:21:18
 * @LastEditTime: 2021-04-18 15:35:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /weatherapp/webapp/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Enrty from '@/components/Entry'
import City from '@/components/City'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Enrty
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
