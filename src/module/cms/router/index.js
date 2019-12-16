import Home from '@/module/cms/page/page_list.vue';
export default [{
    path: '/',
    component: Home,
    name: '系统管理首页',  //菜单名称
    hidden: true,  //不显示true ,false 显示
    children:[{
      path: '/cms/page/list',
      component: Home,
      name: '页面列表',  //菜单名称
      hidden: false,  //不显示true ,false 显示
    }]
    // ,
    // redirect: '/home',
    // children: [
    //   {path: 'home', component: Home}
    // ]
    name: 'Login',
    hidden: true
  }*/
]
