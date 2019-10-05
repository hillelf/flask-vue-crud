import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';


Vue.use(VueRouter);

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
