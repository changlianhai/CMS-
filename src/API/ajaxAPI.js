//引入全局对象
import Globals from '../Globals';

//引入axious请求
import axios  from 'axios';

class APIHelper {
  static httper() {
    let _axios = axios.create({
      baseURL: Globals.getVariables().API_URL(),
      withCredentials: false,
      //headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    });
    //_axios.defaults.headers.common['Authorization'] = localStorage.getItem("user").token;
    //_axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    //console.log(_axios.defaults.headers.common['Accept'])

    // _axios.interceptors.request.use(config => {
    //     //console.log(config.common['Authorization'])
    //     if (localStorage.getItem("user").token) {
    //         config.headers['head'] = localStorage.getItem("user").token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    //     }
    //     return config;
    // }, error => {
    //     // Do something with request error
    //     console.log(error); // for debug
    //     Promise.reject(error);
    // })

    // if (request_content_type) {
    //     _axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    // }

    _axios.interceptors.request.use(
      config => {
        if (localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).token) {
          config.headers.id = JSON.parse(localStorage.getItem('userInfo')).id;
          config.headers.token = JSON.parse(localStorage.getItem('userInfo')).userName;
          config.headers.token = JSON.parse(localStorage.getItem('userInfo')).token;
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );

    _axios.interceptors.response.use(function(res) {
      if (!res.data.success && res.data.code === 402) {
        //location.href = '/login.html';
        //location.href = '/login.html';  请求失败，回到登录页面 ，暂时注了，之后放开

        return;
      }
      return res;
    }, function(error) {
      // Do something with response error
      return Promise.reject(error);
    });

    return _axios;
  }

  static genUrlPath(path, params) {
    var paramStr = '';
    for (let key in params) {
      if (!params[key] || params[key] == '') { continue; }
      paramStr += `${key}=${params[key]}&`;
    }
    return path + '?' + paramStr.slice(0, paramStr.length - 1);
  }

  static get(path, params) {
    return APIHelper.httper().get(APIHelper.genUrlPath(path, params));
  }

  static delete(path, params) {
    return APIHelper.httper().delete(APIHelper.genUrlPath(path, params));
  }

  static postQuery(path, body) {
    return APIHelper.httper(true).post(APIHelper.genUrlPath(path, body), null);
  }

  static post(path, params, body) {
    return APIHelper.httper(false).post(APIHelper.genUrlPath(path, params), body);
  }

  static put(path, params, body) {
    return APIHelper.httper().put(APIHelper.genUrlPath(path, params), body);
  }
}

export default APIHelper;
