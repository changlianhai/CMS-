//css style
import 'iview/dist/styles/iview.css';
//Vue框架
import Vue from 'vue'
//iView 组件库
import iView from 'iview';
//向Vue中导入iView组件
Vue.use(iView);

//业务根应用程序
import login from './login.vue';

const app = new Vue({
  el: '#app',
  render: h => h(login)
});
