import Vue from 'vue';
import pcApp from './layou/index.vue';
import mobileApp from './layou/mobile.vue';
import router from './router';
import store from './store';
import '@/assets/css/index.css';
import './util/compoentGlob.js'
// import './registerServiceWorker';
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(pcApp),
}).$mount('#app');
