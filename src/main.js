import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MuseUI from 'muse-ui'
import VueLazyload from 'vue-lazyload'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false;
Vue.use(MuseUI);
Vue.use(VueLazyload);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
