import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // ES5
  // render function(h) {
  //   return h(App);
  // }
  render: h => h(App),
}).$mount('#app')
