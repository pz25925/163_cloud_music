/*
 * @Author: PengZhen
 * @Description: 程序入口文件
 * @Date: 2018-12-05 11:57:11
 * @Last Modified by: PengZhen
 * @Last Modified time: 2019-02-20 14:36:17
 */
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  render: h => h(App)
}).$mount('#app')
