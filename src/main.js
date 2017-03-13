// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import '!script-loader!jquery'
import '!script-loader!bootstrap/dist/js/bootstrap.js'
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css'
import '!style-loader!css-loader!../src/assets/css/default.css'

import App from './App'

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
