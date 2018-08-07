//系统用户模块类
import ajaxAPI from './ajaxAPI';

const MODULE_NAME = 'cms';

function pathGet() {
  return `${MODULE_NAME}/${action}`;
}

class SystemUser {
  /**
   * 登录请求配置
   * @author clh 2018-7-4
   * @param {{string}}userName  账号
   * @param {{{string}}password  密码
   * @returns void;
   */
  static userLogin(userName, password) {
    return ajaxAPI.get(pathGet('login'), {
      userName,
      password,
    });
  }

  /**
   * 退出登录
   * @author clh 2018-7-4
   * @param {{string}}userName  账号
   * @param {{{string}}password  密码
   * @returns void;
   */
  static signOutLgoin() {
    return ajaxAPI.get(pathGet('logout'), {

    });
  }

  /**
   * 新增用户
   * @author clh 2018-7-4
   * @param {{string}}  userName    账号
   * @param {{{string}} password    密码
   * @param {{{string}} nickName    昵称
   * @param {{{string}} isSuper     类型 << SUPER("超级管理员"),NO_SUPER("管理员");>>
   * @returns void;
   */
  static userAdd(userName, nickName, password, isSuper) {
    return ajaxAPI.post(pathGet('cmsUser'), {
      userName,
      nickName,
      password,
      isSuper
    });
  }

  /**
   * 更新用户信息
   * @author clh 2018-7-4
   * @param {{string}}  id          用户唯一id账号
   * @param {{string}}  userName    账号
   * @param {{{string}} password    密码
   * @param {{{string}} nickName    昵称
   * @param {{{string}} isSuper     类型 << SUPER("超级管理员"),NO_SUPER("管理员");>>
   * @returns void;
   */
  static userUpdate(id, userName, nickName, password, isSuper) {
    return ajaxAPI.put(pathGet('cmsUser'), {
      id,
      userName,
      nickName,
      password,
      isSuper
    });
  }

  /**
   * 查看某个用户
   * @author clh 2018-7-4
   * @param {{string}}  id    用户唯一id账号
   * @returns void;
   */
  static getCurrentUserInfo(id) {
    return ajaxAPI.get(pathGet('cmsUser'), {
      id
    });
  }

  /**
   * 删除某个用户
   * @author clh 2018-7-4
   * @param {{string}}  id    用户唯一id账号
   * @returns void;
   */
  static userDelete(id) {
    return ajaxAPI.delete(pathGet('cmsUser'), {
      id
    });
  }

  /**
   * 更新用户信息
   * @author clh 2018-7-4
   * @param {{string}}  id          用户唯一id账号
   * @param {{string}}  userName    账号
   * @param {{{string}} password    密码
   * @param {{{string}} nickName    昵称
   * @param {{{string}} isSuper     类型 << SUPER("超级管理员"),NO_SUPER("管理员");>>
   * @param {{{string}} pageNo      第几页
   * @param {{{string}} pageSize    每页数量
   * @returns void;
   */
  static getAllUser(id, userName, nickName, password, isSuper, pageNo, pageSize) {
    return ajaxAPI.get(pathGet('cmsUser'), {
      id,
      userName,
      nickName,
      password,
      isSuper,
      pageNo,
      pageSize
    });
  }
}
export default SystemUser;
