//系统用户模块类
import SystemUser from './store/systemUser';

//专题模块类
import Special from './store/special';

//展位模块类
import Booth from './store/booth';

//窗口模块类(windows)
import Windows from './store/windows';

//专题模块类内容
import SpecialContent from './store/specialContent';

//课程管理模块类
import CourseManagement from './store/courseManagement';

//课件管理类
import CoursewareManagement from './store/coursewareManagement';

//直播课 -- 课程管理模块类
import LiveCourseManagent from './store/liveCourseManagent';

//直播课 -- 课件管理模块类
import LiveCourseWareManagent from './store/liveCourseWareManagent';

//直播课 -- 管理老师模块类
import LiveCourseTeacherManagent from './store/liveCourseTeacherManagent';

//store类
class StoresMaps {
  static get() {
    return {
      SystemUser,
      Special,
      Booth,
      Windows,
      SpecialContent,
      CourseManagement,
      CoursewareManagement,
      LiveCourseManagent,
      LiveCourseWareManagent,
      LiveCourseTeacherManagent
    }
  }
}
export default StoresMaps;

