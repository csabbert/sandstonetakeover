import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import Buefy from 'buefy';
import App from './App.vue';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
