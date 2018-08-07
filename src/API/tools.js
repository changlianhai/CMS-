//公共常用方法总结
const tools = {
    /**
     * 将类别英文代表转为文本进行展示
     * @author clh 2018-7-5
     * @param {{string}} val: 类别的英文
     * @returns void;
     */
    categoryChangeText(val) {
        if (val && val.length) {
            if (val === 'YOUNG') {
                return '学前';
            } else if (val === 'PRIMARY') {
                return '小学';
            } else if (val === 'MIDDLE') {
                return '中学';
            } else {
                return '';
            }
        }
    },

    /**
     * 格式化时间戳为 yyyy-mm-dd s:h:m
     * @author clh 2018-7-5
     * @param {{string}} val: 类别的英文
     * @returns void;
     */
    formateTime(val) {
        if (val) {
            let date = new Date(val);
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            let D = date.getDate() + ' ';
            let h = date.getHours() + ':';
            let m = date.getMinutes() + ':';
            let s = date.getSeconds();
            return Y + M + D + h + m + s;
        }
    },
    /**
     * 将类别英文代表转为文本进行展示
     * @author clh 2018-7-5
     * @param {{string}} val: 类别的英文
     * @returns void;
     */
    statusChangeText(val) {
        if (val && val.length) {
            if (val === 'NORMAL') {
                return '正常';
            } else if (val === 'DEL') {
                return '已删除';
            }

            return '';
        }
    },

    /**
     * 将类别英文代表转为文本进行展示
     * @author clh 2018-7-5
     * @param {{string}} val: 类别的英文
     * @returns void;
     */
    templateTypeChagneText(val) {
        if (typeof val !== "undefined") {
            if (val === 0) {
                return '有图课程专区模版';
            } else if (val === 1) {
                return '无图课程专区模版';
            } else if (val === 2) {
                return '有图课件专区模版';
            } else if (val === 3) {
                return '无图课件专区模版';
            } else if (val === 4) {
                return '有图课程模版';
            }
        }
    },

    typeChangeText(val) {
        if (typeof val !== "undefined") {
            if (val === 'COURSE') {
                return '课程';
            } else if (val === 'COURSE_WARE') {
                return '课件';
            }
        }
    }

};


export default tools;