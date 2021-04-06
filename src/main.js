import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './plugins/echarts';

new Vue({
  render: h => h(App),
}).$mount('#app')
