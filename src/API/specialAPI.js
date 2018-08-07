import ajaxAPI from './ajaxAPI';

const MODULE_NAME = 'cms';

function pathGet(action) {
  return `${MODULE_NAME}/${action}`;
}

/*  专题类 */
class Special {
  /**
   * 获取专题列表
   * @author clh 2018-7-4
   * @param {{string}}    id  id唯一
   * @param {{string}}    grade_classify_code  年级分类名称
   * @param {{string}}    names   名称
   * @param {{string}}    status  UNON("未上架"),ON("已上架"),DOWN("已下架")
   * @param {{string}}    pageNo  第几页
   * @param {{string}}    pageSize 每一页个数
   * @returns void;
   */
  static getSpecialList(pageNo, pageSize) {
    return ajaxAPI.get(pathGet('topic'), {
      pageNo,
      pageSize
    });
  }

  /**
   * 新增专题
   * @author clh 2018-7-4
   * @param {{string}}    names   名称
   * @param {{string}}    iconImg  入口图
   * @param {{string}}    bgImg  背景图
   * @param {{string}}    summary  简述
   * @param {{string}}    type  专题类型（"COURSE":课程；"COURSE_WARE":课件）
   * @param {{string}}    status  UNON("未上架"),ON("已上架"),DOWN("已下架")
   * @param {{string}}    templateCode  模板code有图课程专区模版(0) 无图课程专区模版(1) 有图课件专区模版(2) 无图课件专区模版(3) 有图课程模版(4) 无图课程模版(5)
   * @param {{string}}    category 类别（"YOUNG":学前，PRIMARY:"小学",MIDDLE:"中学";）
   * @param {{string}}    status UNON("未上架"),ON("已上架"),DOWN("已下架")
   * @returns void;
   */
  static specialAdd(names, iconImg, bgImg, summary, type, templateCode, category, status) {
    return ajaxAPI.post('topic'), {
      names,
      iconImg,
      bgImg,
      summary,
      type,
      templateCode,
      category,
      status
    }
  }


  /**
   * 更新专题
   * @author clh 2018-7-4
   * @param {{string}}    names   名称
   * @param {{string}}    iconImg  入口图
   * @param {{string}}    bgImg  背景图
   * @param {{string}}    summary  简述
   * @param {{string}}    type  专题类型（"COURSE":课程；"COURSE_WARE":课件）
   * @param {{string}}    status  UNON("未上架"),ON("已上架"),DOWN("已下架")
   * @param {{string}}    templateCode  模板code有图课程专区模版(0) 无图课程专区模版(1) 有图课件专区模版(2) 无图课件专区模版(3) 有图课程模版(4) 无图课程模版(5)
   * @param {{string}}    id  唯一标识
   * @param {{string}}    category 类别（"YOUNG":学前，PRIMARY:"小学",MIDDLE:"中学";）
   * @param {{string}}    status UNON("未上架"),ON("已上架"),DOWN("已下架")
   * @returns void;
   */
  static specialUpdate(names, iconImg, bgImg, summary, type, templateCode, id, category, status) {
    return ajaxAPI.put(pathGet('topic'), {
      names,
      iconImg,
      bgImg,
      summary,
      type,
      templateCode,
      id,
      category,
      status
    });
  }


  /**
   * 删除专题
   * @author clh 2018-7-4
   * @param  {{string}} id专题唯一标识
   * @returns  void;
   */
  static specailDelete(id) {
    return ajaxAPI.delete(pathGet('topic'), {
      id
    })
  }

  /**
   * 查询专题
   * @author clh 2018-7-4
   * @param  {{string}} 专题的id
   * @returns  void;
   */
  static specialSearch(id) {
    return ajaxAPI.get(pathGet('topic'), {
      id
    })
  }
}

export default Special;


