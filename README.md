# efunbox-voice-web-admin

> 智能语音管理平台

## 开发环境搭建

1. 开发机需要安装Node.js运行环境，官网下载链接 https://nodejs.org/en/
2. 开发工具不限，文本编辑器也可以，不过我们建议使用Sublime，VSCode，Atom等前端领域较为流行的IDE
3. git clone本项目代码
4. 运行 npm install 初始化项目，以及下载项目所需的组件包等代码

## 开发常用命令

``` bash
# install dependencies
npm install

# 运行本地调试服务程序 serve with hot reload at localhost:8080
npm run dev

# 运行编译打包 build for production with minification
npm run build

# 运行编译打包可发布至正式环境的程序
npm run publish

```

## 开发环境必要配置

本机增加hosts 以模拟域名访问后台服务开发机IP

``` bash
192.168.1.18    cms.api.efunbox.cn                 //此处ip为API接口所在ip，必须设置
```

## 开发机模拟线上真实域名环境

本节内容为非必须，如果暂不需要模拟真实域名环境，可以不照做

因为管理后台前端和后台API有关用户权限校验是使用cookies，所以对前端域名和后端api域名有要求，所以开发机需要做如下配置

1.本机增加hosts

``` bash
127.0.0.1     cms.efunbox.cn        //本机前端项目模拟线上域名地址
192.168.1.18    cms.api.efunbox.cn                 //此处ip为API接口所在ip，必须设置
```

2.package.json修改,增加 --port 80，以允许dev server以80端口启动

``` bash
"dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot --port 80",
```

3.使用cms.efunbox.cn访问本机项目# efun
