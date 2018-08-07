//导入专题API接口
import  SpecialAPI from '../API/specialAPI.js';

const GET_SPECIALLIST = 'GET_SPECIALLIST';
//数据
const state = {
   specialList:[],
    length: 0
};

//获取state仓库数据
const getters = {
  specialList: state => state.specialList,
  length: state => state.length
};

//AJAX交互
const actions = {
   getSpecailList({ dispatch, commit, getters, rootGetters}, playod) {
     SpecialAPI.getSpecialList(playod.pageNo, playod.pageSize).then(res=> {
       rootGetters.message.destroy();
       if (res.data.code !== 200) {
         rootGetters.message.error(res.data.message);
         return;
       }
       commit('GET_SPECIALLIST', res);
     }).catch(err => {
       rootGetters.message.destroy();
       rootGetters.message.error(rootGetters.words.UNKNOWN_EXCEPTION);
     });
   },

    specailDelete({ dispatch, commit, getters, rootGetters}, playod) {
        SpecialAPI.specailDelete(playod.id).then(res=> {
            rootGetters.message.destroy();
            if (res.data.code !== 200) {
                rootGetters.message.error(res.data.message);
                return;
            }
            commit('GET_SPECIALLIST', res);
        }).catch(err => {
            rootGetters.message.destroy();
            rootGetters.message.error(rootGetters.words.UNKNOWN_EXCEPTION);
        });
    }

};

const mutations = {
  [GET_SPECIALLIST](state, res) {
      state.specialList =  res.data.data.list;
      state.length = res.data.data.totalSize;
  }
};

export  default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
