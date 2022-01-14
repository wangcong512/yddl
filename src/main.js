import Vue from 'vue'
import App from './App.vue'
import MintUI from  'mint-ui'

Vue.use(MintUI)
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
