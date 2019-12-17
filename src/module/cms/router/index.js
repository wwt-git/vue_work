import Home from '@/module/cms/page/page_list.vue';
export default [{
    path: '/',
    component: Home,
    name: 'cms管理',  //菜单名称
    hidden: false,  //不显示true ,false 显示
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
  }/*,
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }*/
]
