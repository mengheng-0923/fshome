# 什么是react-route
基于react路由库，用于实现spa的导航功能
特点：1.有多种路由模式HashRouter,BrowserRouter
      2.支持嵌套路由和动态路由
      3.实现代码分割和懒加载
# BrowserRouter 和 HashRouter 有什么区别
BrowserRouter：url更简洁美观，刷新页面不会丢失路由的 state 参数
HashRouter：兼容性更好，但是美观度不如BrowserRouter，刷新页面可能导致路由 state 参数丢失
# React-Router v5和v6有什么区别 
1.使用Routers代替Switch 标签
2.将渲染属性（render/component/children）统一改为element
3.编程式导航（history）、重定向组件（Redirect）统一改为navigate
4.嵌套路由通过<Outlet>自动渲染，支持配置式嵌套
5.移除正则路由匹配，支持更简洁的动态参数例如{"/home/:id"}
# 路由传参的三种方式
1.动态传参
<navigate path="/home/:id" + id ,{state:{}}>
例如{"/home/:id"},获取使用useParams()钩子函数
2.查询参数
例如{"/home?a=1&&b=2"},获取使用useSearchParams()
3.隐式参数
传递隐式参数
<link path="" state={a:1,b:2}></link>
<navigate path="" ,{state:{}}></navigate>
使用useLocation获取参数

# react-route如何返回上一页
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>返回</button>;
}
# 什么是受控路由和非受控路由
受控：通过router组件显示定义的路由规则
非受控： 通过编程时导航或者link触发的路由变化
# react router中的push和replace有什么区别
push： 是记录中添加，可以后退返回
replace： 替换当前历史记录，不能后退返回
# 什么是路由守卫？如何实现？
定义：控制路由访问的权限
1.router组件进行条件渲染
2.路由重定向navigate，跳转到未授权界面
# 如何实现懒加载路由？
1.使用lazy + 动态导入的方法
    const home = lazy(()=>{import('./home')})
    const home = lazy(()=>{import('./home')})
    BroseRouter => Suspense
    <Route path="/home" element={
                                 <Suspense  fallback={ <Spinner> }>
                                   <Home />
                                 </Suspense>
                                }
     />
2.<navigate path="" perfetch='intent'>perfetch = 'intent'
const home = lazy(()=> import('./home'))
# link和navlink的区别
主要区别在于‌NavLink具有激活状态样式功能‌
自动添加激活状态样式，默认类名为active
可通过activeClassName自定义激活样式类名
可通过activeStyle直接设置激活时的内联样式
