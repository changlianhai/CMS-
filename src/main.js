
//引入iview.css文件
import 'iview/dist/styles/iview.css';

//引入vue.js文件
import Vue from 'vue';

//引入iview.js文件
import iView from 'iview';
Vue.use(iView);

//引入vuex.js,并且注入
import Vuex from  'vuex';
Vue.use(Vuex);

//引入路由,注入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//路由统一管理类
import RoutersMaps from './RoutersMap';

//得到路由配置表
const routes = RoutersMaps.get();

//创建路由实例
const router = new VueRouter({
  routes
});

//store仓库数据管理类
import StoresMaps from './StoresMaps';

//导入全局对象,环境配置和一些公用方法
import Globals from "./Globals";


//创建vuex实例
const store = new Vuex.Store({
  getters: {
    message: state => {
      return iView.Message;
    },
    router: state => {
      return router;
    },
    words: state =>{
      return Globals.getWords();
    },
    variables: state =>{
      return Globals.getVariables();
    },
    methods: state =>{
      return Globals.getMethods();
    }
  },
  actions: {

  },
  modules: StoresMaps.get(),
});
console.log(store);

//入口
import App from './App.vue';


const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
});

