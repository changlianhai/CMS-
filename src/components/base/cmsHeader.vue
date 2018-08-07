<template>
  <div class="main_login">
    <div class="main_login_title">CMS系统</div>
    <div class="layout-user-box">
      <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)" class="login_person">
          <Icon type="ios-person-outline"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem><div @click="signOut">退出</div></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
    import ajaxAPI from './../../API/ajaxAPI';
    import Globals from '../../Globals_login';
    export default {
        name: "cmsHeader",
        methods: {
            signOut() {
                ajaxAPI.get(Globals.getVariables().API_URL() + '/cms/logout', {
                    token: JSON.parse(sessionStorage.getItem('userInfo')).token
                }).then(res => {
                    let timer = null;
                    if (res.data.code !== 200) {
                        this.$Message.error(res.data.message);
                        return;
                    }
                    this.$Message.success('退出成功');

                    timer = setTimeout(()=> {
                        location.href = 'http://localhost:8090/login.html';   // 先写死了，之后修改
                    },2000);
                }).catch(err => {

                })
            }
        }
    }
</script>

<style scoped>
  .main_login { height: 50px;background: #3a3d4e;text-align: right;line-height: 50px;padding-right:50px; }
  .main_login_title { float: left;font-size:20px;margin-left:28px;color:#fff; }
</style>
