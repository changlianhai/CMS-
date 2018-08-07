class RoutersMaps {
   static get() {

     const systemUser = resolve => require(['./page/systemUser/systemUser.vue'], resolve);

     const special = resolve => require(['./page/special/special.vue'], resolve);

     const booths = resolve => require(['./page/booths/booths.vue'], resolve);

     const windows = resolve => require(['./page/windows/windows.vue'], resolve);

     const specialContent = resolve => require(['./page/specialContent/specialContent.vue'], resolve);

     const courseManagement = resolve => require(['./page/courseManagement/courseManagement.vue'], resolve);

     const coursewareManagement = resolve => require(['./page/coursewareManagement/coursewareManagement.vue'], resolve);

     const liveCourseManagent = resolve => require(['./page/liveCourseManagent/liveCourseManagent.vue'], resolve);

     const liveCourseWareManagent = resolve => require(['./page/liveCourseWareManagent/liveCourseWareManagent.vue'], resolve);

     const liveCourseTeacherManagent = resolve => require(['./page/liveCourseWareManagent/liveCourseWareManagent.vue'], resolve);

     const routes = [

       //systemUser
       // {
       //   path: '/',
       //   name: 'special',
       //   component: special
       // },
       //系统用户模块
       {
         path: '/systemUser',
         name: 'systemUser',
         component: systemUser
       },
       // 专题模块
       {
         path: '/special',
         name: 'special',
         component: special
       },
       //展位模块
       {
         path: '/booths',
         name: 'booths',
         component: booths
       },
       //窗口模块
       {
         path: '/windows',
         name: 'windows',
         component: windows
       },
       //专题内容模块
       {
         path: '/specialContent',
         name: 'specialContent',
         component: specialContent
       },
       //课程管理模块
       {
         path: '/courseManagement',
         name: 'courseManagement',
         component: courseManagement
       },
       //课件管理模块
       {
         path: '/coursewareManagement',
         name: 'coursewareManagement',
         component: coursewareManagement
       },
       //直播课---课程管理
       {
         path: '/liveCourseManagent',
         name: 'liveCourseManagent',
         component: liveCourseManagent
       },
       //直播课--课件管理
       {
         path: '/liveCourseWareManagent',
         name: 'liveCourseWareManagent',
         component: liveCourseWareManagent
       },
       //直播课--老师管理
       {
         path: '/liveCourseTeacherManagent',
         name: 'liveCourseTeacherManagent',
         component: liveCourseTeacherManagent
       },
       // //重定向
       // {
       //   path: '/',
       //   name: 'booths',
       //   redirect: booths
       // }
     ];

     return routes;
   }
}
export default RoutersMaps;
