<template>
    <div class="layout">
        <header>CMS管理系统</header>
        <div class="login-panel">
            <Form class="login-form" ref="loginForm" :model="loginForm" :rules="loginRule">
                <Form-item prop="user">
                    <Input type="text" v-model="loginForm.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="loginForm.password" placeholder="密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" size="large" shape="circle" @click="submit()" long>登录</Button>
                </Form-item>
            </Form>
        </div>
        <footer class="login_footer">
            北京义方天下教育科技有限公司 &copy; 2010-2018
        </footer>
    </div>
</template>

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        background: #495060;
    }

    .layout {
        width: 100%;
        height: 100%;
    }

    header {
        width: 100%;
        font-size: 33px;
        text-align: center;
        color: white;
        padding: 6% 0 10px 0;
    }

    .login-panel {
        width: 100%;
        padding: 50px 36%;
    }

    .login-form {
        min-width: 300px;
        background: white;
        border-radius: 10px;
        padding: 20px 16px 1px 16px;
        text-align: center;
    }

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        /*color: darkgray;*/
        color: white;
        text-align: center;
        padding: 20px 0;
    }

    .ivu-btn-primary {
    }

    .login_footer {
        background-color: #3a3d4e;
    }
</style>

<script>
    import ajaxAPI from './API/ajaxAPI';
    import Globals from './Globals_login';

    export default {
        data() {
            return {
                loginForm: { //用户信息数据
                    userName: '',
                    password: '',
                    token: '',
                },
                loginRule: {   //用户信息校验
                    userName: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        {type: 'string', min: 5, message: '密码长度不能小于5位', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            //登录
            submit() {
                this.$refs.loginForm.validate((valid) => {
                    if (!valid) {
                        return;
                    }
                    console.log(this);
                    const loadingM = this.$Message.loading('正在登录中...', 0);
                    let httper = axios.create({
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    });
                    ajaxAPI.get(Globals.getVariables().API_URL() + '/cms/login',
                        {
                            userName: this.loginForm.user,
                            password: this.loginForm.password
                        }).then((res) => {
                        this.$Message.destroy();
                        if (res.data.code !== 200) {
                            this.$Message.error(res.data.message);
                            return;
                        }
                        let data = res.data.data;

                        this.$Message.success('登录成功');

                        //用户信息存储到localStorage;
                        localStorage.setItem('userInfo',JSON.stringify(res.data.data));
                        setTimeout(() => {
                            location.href = '/';   //登录成功，跳转到首页
                        }, 1500);
                        return;
                    }).catch((res) => {
                        this.$Message.destroy();
                        if (res instanceof Error) {
                            this.$Message.error(res.message);
                            console.log('Error Code:', res.status);
                            return;
                        }
                        this.$Message.error('unknown error');
                    });
                })
            }
        }
    }

</script>
