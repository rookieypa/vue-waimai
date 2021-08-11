import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'
import loading from './assets/loading.gif'
import VueLazyload from 'vue-lazyload'
import './filter'

Vue.use(VueLazyload,{
  loading
})
Vue.component(Button.name,Button)
new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
})