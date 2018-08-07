//导入请求接口类
import SystemUserAPI from './../API/systemUserAPI';

const GET_USERINFO = 'GET_USERINFO';
const DEL_USER = 'DEL_USER';
const ADD_USER = 'ADD_USER';

//页面所需要的数据
const state = {
  userName:'',
  password: '',
  nickName:'',
  isSuper:'',
  userList:[],
  pageNo:1,
  pageSize:10,
  id:''
};

//获取state仓库的数据
const getters = {
  userName: state => state.userName,
  password: password => state.password,
  nickName: nickName => state.nickName,
  isSuper: isSuper => state.isSuper,
  pageNo: pageNo => state.pageNo,
  pageSize: pageSize => state.pageSize,
  id: id => state.id
};

const actions = {
  userLogin({ dispatch, commit, getters, rootGetters }, payload) {
    SystemUserAPI.userLogin(payload.userName, payload.password).then(res=>{
      rootGetters.message.destroy();
      if (res.data.code !== 200) {
        rootGetters.message.error(res.data.message);
        return;
      }
      commit(GET_USERINFO, res);
      rootGetters.message.success(rootGetters.words.DELETE_OK);

    }).catch(err=>{
      rootGetters.message.destroy();
      rootGetters.message.error(rootGetters.words.UNKNOWN_EXCEPTION);
    })
  }
};

const mutations = {
  [GET_USERINFO](state, res) {
    state.userName = res.data.userName;
    state.password = res.data.password;
  }
};
export default  {
  namespaced: true,  //命名空间配置
  state,
  getters,
  actions,
  mutations,
}

