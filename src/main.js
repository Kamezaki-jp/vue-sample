import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
// グローバル登録
Vue.component('LikeNumber', LikeNumber);
new Vue({
  // ES5
  // render function(h) {
  //   return h(App);
  // }
  render: h => h(App),
}).$mount('#app')
