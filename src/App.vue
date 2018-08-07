<template>
  <div class="main">
    <cms-header></cms-header>
    <div class="main_container">
      <div class="main_left_menu">
        <Menu :theme="theme">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              图书馆
            </template>
            <MenuItem name="1-1"><div @click="toLink('special')">专题</div></MenuItem>

            <MenuItem name="1-2"><div>专题相关</div></MenuItem>


            <MenuItem name="1-3">展位</MenuItem>
            <MenuItem name="1-4">窗口</MenuItem>


            <MenuItem name="1-5">课程</MenuItem>

            <MenuItem name="1-6">课件</MenuItem>

          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing"></Icon>
              直播课
            </template>
            <MenuItem name="2-1">课程</MenuItem>
            <MenuItem name="2-2">课件</MenuItem>
            <MenuItem name="2-3">教师</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-gear"></Icon>
              后台用户
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="main_container_main_right">
        <router-view></router-view>
      </div>
    </div>
    <cms-footer></cms-footer>
  </div>
</template>

<script>
  import cmsHeader  from './components/base/cmsHeader.vue';   //头部组件
  import cmsFooter  from './components/base/cmsFooter.vue';   //尾部组件
  export default {
    name: 'App',
    data() {
      return {
        theme:'dark'
      }
    },
    components: {
      cmsHeader,
      cmsFooter
    },
    created() {
    },
    methods: {
      toLink(url) {
        if( url && url.length) {
          if (url ==='special') {
            this.$router.push('/special');
          } else if(url ==='specialContent') {
            this.$router.push('/specialContent');
          }
        }
      }
    }
  }
</script>

<style>
  /*  common样式 */
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  body {
    background: #fff;
    color: #555;
    font-size: 14px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
  td, th, caption {
    font-size: 14px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-size: 100%;
  }
  address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
  }
  a {
    color: #555;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    border: none;
    vertical-align: middle;
  }
  ol, ul, li {
    list-style: none;
  }
  input, textarea, select, button {
    font: 14px "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
  table {
    border-collapse: collapse;
  }
  html {
    overflow-y: scroll;
  }
  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: inline-block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .clearfix {
    *zoom: 1;
  }

  /*公共类*/
  .fl {
    float: left
  }
  .fr {
    float: right
  }
  .al {
    text-align: left
  }
  .ac {
    text-align: center
  }
  .ar {
    text-align: right
  }
  .hide {
    display: none
  }
  html, body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  /*  首页样式 */
  .main { height: 100%; }
  .main_container {  display: table;width:100%;height:calc(100% - 90px); }
  .main_left_menu { display: table-cell;width:180px;height:100%;background-color: #495060; }
  .main_container_main_right { display: table-cell; }
  .main_login_title { float: left;font-size:20px;margin-left:28px;color:#fff; }
  .ivu-dropdown-item { text-align: center;color:#333; }
  .ivu-icon { color:#fff; }
  .ivu-menu {width: 180px !important; }
</style>
