const words = {
    LOADING: '加载中...',
    OPERATING: '操作中...',
    SAVING: '保存中...',
    UPDATING: '更新中...',
    DELETING: '删除中...',
    SAVE_OK: '保存成功!',
    UPDATE_OK: '更新成功!',
    DELETE_OK: '删除成功!',
    UNKNOWN_EXCEPTION: '未知错误导致程序异常'
};

const variables = {
    API_URL: function() {
        switch (process.env.NODE_ENV) {

            case 'production':      //==>>生产环节
                return 'http://192.168.1.11:8035/';
                break;
            case 'development':   //==>>开发环境
                return 'http://192.168.1.11:8035/';
                break;
          default:
               return 'http://192.168.1.11:8035/'; //默认环境
        }
    },
    OSS_URL: '//efunimgs.oss-cn-beijing.aliyuncs.com/'
};

const methods = {
    formatDateTime: function(t) {
        //t must be milliseconds
        let date = new Date(t);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = (month < 10 ? '0' : '') + month;
        let day = date.getDate();
        day = (day < 10 ? '0' : '') + day;
        let hour = date.getHours();
        hour = (hour < 10 ? '0' : '') + hour;
        let minute = date.getMinutes();
        minute = (minute < 10 ? '0' : '') + minute;
        let second = date.getSeconds();
        second = (second < 10 ? '0' : '') + second;
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    },
    formatDate(t) {
        //t must be milliseconds
        let date = new Date(t);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = (month < 10 ? '0' : '') + month;
        let day = date.getDate();
        day = (day < 10 ? '0' : '') + day;
        return `${year}-${month}-${day}`;
    }
};

export default {
    install(Vue, option) {
        Vue.prototype.$words = words;
        Vue.prototype.$variables = variables;
        Vue.prototype.$methods = methods;
    },
    getWords() {
        return words;
    },
    getVariables() {
        return variables;
    },
    getMethods() {
        return methods;
    }
}
