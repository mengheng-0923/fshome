# **====================================关于 React==============================================================================================================================================**

## 谈谈你对 React 的了解?

虚拟 DOM：它并不直接对 DOM 进行操作，引入了一个叫做虚拟 DOM 的概念，安插在 javascript 逻辑和实际的 DOM 之间，React 使用虚拟 DOM 和 diff 算法来有效地操作 DOM，提高了应用的性能。
组件化：React 采用组件化的开发方式，将页面拆分为一个个组件，方便视图的拆分和使用，代码更加模块化，可维护性高。
单向数据流：React 采用单向数据流的数据绑定方式，使得数据的流动清晰可见，方便开发者追踪和调试
声明式设计：React 采用声明式设计，只需要告诉程序想要什么效果而不需要指定实现细节，让开发者更加关注于业务逻辑；
自动批处理：把多个状态更新合并到一次渲染；
并发模式：允许 react 同事处理多个任务，提升 ui 响应速度；

## 为什么虚拟 DOM 会提高性能？说下他的原理？

虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能；

## React 的 diff 原理？

React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.

把树形结构按照层级分解，只比较同级元素
对虚拟 dom 的比较
同层比较不跨等级
元素类型不同的话 就会删除元素
元素类型相同 比较 props

列表要用 key 辅助 react 进行准确对比
选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

## React 中的 ref 是什么？如何使用？何时使用？

是 react 中的一种引用机制，直接访问 dom 节点或者真实实例；
useRef()/React.createRef();
何时使用 Refs： 1.管理焦点，文本选择或媒体播放。 2.触发强制动画。 3.集成第三方 DOM 库。
Ref 属性附加到 React 元素

## React 中的 key 属性有什么作用？

Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。
让 react 能够精准的进行 dom 差异比较（diff 算法），减少不必要的渲染；

## React 中的 Context 是什么？如何使用？

Context 就是组件树中提供数据传递的方法；
const AppContext = React.createContext('dark');
useContext(AppContext);
需要注意的是，想要使用 context 里的数据，组件必须在，通过 Provide 包裹的组件树中；

## hook 是什么？说说你对 React Hook 的了解?

React-Hooks 是一套能够使函数组件更强大、更灵活的“钩子”。
以前我们使用类组件继承 React.Component 就可以使用 state 管理状态，使用生命周期函数。但类式组件的问题是写法繁琐理解成本高，实现逻辑复用困难
通常为了复用一部分逻辑功能需要继承整个组件，即使使用高阶组件也会增加组件的嵌套层级，导致代码难以理解。
而函数式组件语法更加简洁，并且更利于逻辑的拆分和组件的复用。
但早期的函数式组件无法维护和定义自己的 state，也没有生命周期，这就造成了很多局限性
而 hook 正式为了补全函数式组件缺失的功能出现，我们可以使用这些钩子实现缺失的功能，
比如 useState 定义状态、useEffect 实现生命周期方法、useContetx 实现组件跨级传递数据等等；
使我们可以在不使用 class 组件的情况下也能使用 react 的特性；

## React Hook 的使用限制有哪些?

不要在循环，条件或嵌套函数中调用 Hook，必须始终在 React 函数的顶层使用 Hook

## React Hooks 解决了哪些问题

组件间状态逻辑复用困难：
在 Hooks 出现之前，React 有两种主要的方式来复用组件间的状态逻辑，高阶组件（HOC）和 render props。但这两种方式都有自己的问题，例如，HOC 可能会导致 props 命名冲突，render props 则可能会导致组件树嵌套过深。引入 Hooks 后，可以使用自定义 Hook 来更加方便地复用状态逻辑。
复杂组件变得难以理解：
在 class 组件中，如果有很多的生命周期方法，逻辑可能会分散在各个生命周期方法中，导致同一块功能的代码被拆分到了不同的地方。而且，由于在生命周期方法中经常需要处理清理逻辑，很容易导致代码混乱。引入 Hooks 后，可以使用 Effect Hook（useEffect）将相关的代码组织在一起。
难以理解的 class 组件：
class 组件需要了解很多 JavaScript 中的概念，例如 this 的绑定，以及不能将方法直接传给子组件，否则可能会导致不必要的渲染。此外，class 组件的生命周期方法也有很多，需要我们理解和记忆。引入 Hooks 后，可以完全使用函数组件，不再需要 this，也不再需要生命周期方法
函数组件状态；生命周期特性；

## React 中的高阶组件（HOC）是什么？如何使用？

就是一个函数，不过这个函数的入参是一个组件，返回一个增强组件；
我们可以复用这个入参组件的基础上在封装一个自己想要我逻辑；

## React 中的合成事件是什么？它与原生事件有什么区别？

合成事件其实就是 react 对浏览器原生事件的封装，提供了跨浏览器的兼容性；
react 的事件系统使用的委托机制，就是同意绑定在根节点上，提升性能；

## React 的生命周期函数有哪些？它们的执行顺序是什么？

  <!-- 初始化阶段 -->

constructor() 通过 props 更新我们的 state，返回一个对象；
reden() 返回一个 jsx/html 结构，渲染我们的界面；
componentDidMount() 组件已经挂载完毕，发送请求/做一些订阅操作；

  <!-- 更新阶段 -->

stic getDirvideStateFormProps()；
shouldComponentUpdate() 返回一个布尔值，通过布尔值来决定我的组件是否要更新；
getSnapshotBeforeUpdate() 我们的更新操作返回给 Dom 之前进行调用的，想获取一些盒子的滚动的数据；在最新的渲染输出提交给 DOM 之前调用
他的返回值可以给到我们下一个生命周期函数里使用就是
componentDidUpdate() 更新结束进行调用

  <!-- 卸载阶段 -->

componentWillUnMount() 清除一些定时器；

  <!-- 错误捕获阶段 -->

componentDidCatch()

## 在哪些生命周期中可以修改组件的 state？

constructor()
staic getDirvideStateFormProps()
componentDidUpate()
componentDidMount()

## React 中可以在 Render 访问 Refs 吗?为什么？

不可以，render 阶段 DOM 还没有生成，无法获取 DOM。

## shouldComponentUpdate 是做什么的？

优化组件性能的一个周期函数，返回一个布尔值，来决定是否渲染组件

## React 什么时候会重新渲染，重新渲染时发生了什么

1.state 状态发生变化 2.父组件重新渲染引发子组件重新渲染
3.props 改变
重新渲染时 react 会生成新的虚拟 DOM 树，和旧的虚拟 DOM 使用 diff 算法对比，将差异放入一个对象中，然后遍历该对象，更新真实 DOM

## 如何避免 React 组件的重复渲染？

使用 React.Mome 让函数组件做浅层对比；
是同 useMome 和 useCallback 勾子函数，缓存值和函数；
避免使用匿名函数，或者对象直接写在 jsx 里，导致新引用；

## React 性能优化的方法有哪些？

使用 React.Mome 让函数组件做浅层对比；
使用 shoouldcomponentUpdate 周期函数；
减少匿名函数和对象的频繁创建；
合理拆分组件，避免大组件重复更新；

## React 中组件如何进行数据传值？

父组件传子组件：通过 props 的方式
子组件传入父组件：父组件将自身函数传入，子组件调用该函数，父组件在函数中拿到子组件传递的数据
兄弟组件通信：找到共同的父节点，用父节点转发进行通信
跨层级通信：使用 Contetx 可跨域多层传递全局数据
全局状态管理工具：redux 维护一个全局状态中心的 store

## React 很多个 setState 为什么是执行完再 render

react 为了提高整体的渲染性能，会将一次渲染周期中的 state 进行合并，在这个渲染周期中你对所有 setState 的所有调用都会被合并起来之后，再一次性的渲染，这样可以避免频繁的调用 setState 导致频繁的操作 dom，提高渲染性能。

## 什么是 JSX？为什么浏览器无法读取 JSX？

是 js 的语法扩展，用于描述组件结构；
浏览器只能读取标准的 js

## 请列举 React 中定义组件的方法？有什么区别?

类组件： export default class Mycomponent extends React.Component(
render() {
return (<><>)
}
)
函数组件：function Mycomponent() {
return (<><>)
}
函数式组件比类组件操作简单，只是简单的调取和返回 JSX；而类组件可以使用生命周期函数来操作业务
类组件使用 ES6 类语法定义，需继承 React.Component 并实现 render()方法。函数式组件使用纯函数定义，接收 props 作为参数并返回 React 元素。 ‌
状态管理
类组件通过 this.state 管理内部状态，使用 this.setState()更新状态。函数式组件最初无法管理状态，但通过 useState 等 Hooks 可实现状态管理。 ‌
生命周期方法
类组件包含 componentDidMount、componentWillUnmount 等生命周期方法，用于处理组件加载、卸载等生命周期事件。函数式组件通过 useEffect 等 Hooks 实现类似功能。 ‌
性能与使用场景
函数式组件无需实例化，渲染效率通常高于类组件，适合简单场景（如纯展示组件）。类组件支持复杂逻辑处理（如状态管理、生命周期控制），适用于大型应用或需要维护复杂交互的场景。 ‌
代码简洁性
函数式组件代码更简洁，易于阅读和维护；类组件因需继承和实现生命周期方法，代码量相对较多。 ‌
设计思想上
类组件是面向对象编程思想，我们需要继承 React.Component 并调用 render 方法返回一个 react 元素；而函数组件是函数式编程思想，接收一个 props 可以直接调用，返回一个新的 React 元素。
类组件使用 state 对象定义状态变量，有诸如 componentDidMount、shouldComponentUpdate 等生命周期钩子函数；而函数组件没有 this，使用一系列的内置 hooks 实现对应的功能，比如使用 useState 创建状态变量，使用 useEffect 实现类似于 componentDidMount、shouldComponentUpdate 等生命周期钩子函数的功能。
缓存方式不同
类组件可以通过 pureCompoment 和 shouldComponentUpdata 来缓存，函数式组件可以使用 React.memo 、 useMemo、useCallBack 缓存
实现复用的方式不同
类组件使用 hoc（高阶组件）、render props 实现组件的逻辑复用、拓展组件的功能；而函数组件使用自定义 hooks 实现组件的逻辑复用。

## （组件的）状态（state）和属性（props）之间有何不同？

State 是一种数据结构，用于组件挂载时所需数据的默认值。State 可能会随着时间的推移而发生变化。（内部的数据结构，可变）
Props 是组件的配置。props 由父组件传递给子组件，并且就子组件而言，props 是不可变的。(外部传入，不可变)

内外部传入；可变、不可变；数据来源 自身 父组件传入

## 为什么 useState 要使用数组而不是对象

灵活性
数组解构赋值允许开发者自定义变量名，例如 const [count, setCount] = useState(0)，而对象解构必须使用固定属性名（如 const {value, setValue} = useState(0)）。这种灵活性使代码更易读、易维护。 ‌
扩展性
数组结构为未来功能扩展预留空间。若未来增加新状态（如 isPending），只需修改解构方式（如 const [count, setCount, isPending] = useState(0)），无需修改现有代码。而对象解构需同步修改属性名，可能导致兼容性问题。 ‌
性能优化
数组解构在部分场景下性能略优于对象解构，且简化 React 内部实现逻辑。 ‌
一致性
React 其他 Hook（如 useReducer 、 useContext ）均采用数组返回值，保持 API 设计统一性。 ‌

## 调用 setState 之后发生了什么？

新旧 state 合并
将更新放在更新队列里边
根据新的 state 触发 render()
更新我们的虚拟 dom，通过 diff 算法更新真实 dom
更新完以后 触发 componentDidUapdate()周期函数

## 为什么建议传递给 setState 的参数是一个 callback？而不是一个对象？

因为 this.props 和 this.state 的更新可能是异步的，不能依赖它们的值去计算下一个 state。
他是一个异步更新，有可能会使用旧对象，如果是一个函数的话，就会一定获取一个最新的 state

## （在构造函数中）调用 super（props）的目的是什么？

在 super() 被调用之前，子类是不能使用 this 的，子类构造函数中调用父类的构造函数,能在 constructor 访问 this.props。使 this.props 可用

## React 中 component 和 pureComponent 区别是什么？

component：默认不做 props 和 state 的对比，更新就会重新渲染
pureComponent：表示一个纯组件，相对于普通组件来说，它会自动执行 shouldComponentUpdate 生命周期函数方法，对比新旧 props 和 state 是否发生变化，如果没有发生变化 return false 来阻止页面的更新，从而减少不必要的 render 执行，提高组件的性能。

## 什么是无状态组件，与有状态组件的区别？

有状态组件通常指的是类组件，类组件可以维护自身的状态变量，即组件的 state ，类组件还有不同的生命周期方法。
无状态组件可以是类组件也可以是函数式组件，优先设置为函数组件，无状态组件内部不维护 state，只根据外部组件传入的 props 进行渲染的组件，当 props 改变时，组件重新渲染。无状态组件不能使用 ref 和生命周期方法，如自定义的 <Button/>、 <Input /> 等组件。

## 何为受控组件（controlledcomponent）？

contextTest 文件有举例
受控组件是指组件的状态 state 来控制，非受控组件的状态不由 state 控制。
他们之间的区别如下：

获取数据方式不同：
受控组件通常通过在元素上绑定 onChange 事件，当表单元素的值发生变化时，会触发 onChange 事件，从而更新组件的 state；
非受控组件的数据获取是通过访问 DOM 读取到 value，比如使用 ref 来访问 inputRef.current.value
更新数据方式不同：
受控组件的数据处理是通过 setState()方法进行更新；非受控组件的数据处理不受 setState()控制，直接在 DOM 中处理。
数据绑定：
受控组件实现了双向数据绑定，当表单元素的值发生变化时，会同时更新组件的 state 和 DOM 中的值；非受控组件没有实现双向数据绑定，表单元素的值变化只会影响 DOM 中的值，不会更新组件的 state。

# **====================================关于 Redux==============================================================================================================================================**

## 了解 redux 么，说一下 redux？

redux 是一个应用数据流框架，主要是解决了组件间状态共享的问题
原理是集中式管理
主要有三个核心方法，action，store，reducer
工作流程是 view 调用 store 的 dispatch 接收 action 传入 store，reducer 进行 state 操作，view 通过 store 提供的 getState 获取最新的数据;
新增 state,对状态的管理更加明确，通过 redux，流程更加规范了，减少手动编码量，提高了编码效率.
同时缺点时当数据更新时有时候组件不需要，但是也要重新绘制，有些影响效率。一般情况下，我们在构建多交互，多数据流的复杂项目应用时才会使用它们

## 你怎么理解 redux 的 state 的？

是一个全局的状态树，集中式存储整个应用的状态
任何组件都可以通过 connect / useSelector()访问。
特点：单一来源、只读（只能通过 action 更新）、使用 reducer 纯函数处理状态变化

## 列出 Redux 的核心方法？

createStore()创建 store
store.getState()获取我们 store 里的数据
store.dispatch()派发行为 type data
store.subscribe()**订阅状态变化useSelector**
const num = useSeteclor((state)=>{
stete.num
})

## 解释 Reducer 的作用？

接收 state + action 返回一个新的 state；
纯函数：不修改原来的 state，没有副作用

## redux 有什么缺点？

一个组件所需要的数据，必须由父组件传过来，而不能像 flux 中直接从 store 取。
当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新 render，可能会有效率影响，或者需要写复杂的 shouldComponentUpdate 进行判断。

样板代码多；不太适合小型的应用（略微复杂），调式不当可能会有性能问题；

## redux 中间件原理？

函数的链式调用，增强 dispstch

## Redux 的工作流程？

组件通过 dispatch action 派发行为
action 到达 reduce 执行纯函数
返回最新的 state
更新 state 以重新渲染组件

## 简述 flux 思想？

用户访问 View
View 发出用户的 Action
Dispatcher 收到 Action，要求 Store 进行相应的更新
Store 更新后，发出一个"change"事件
View 收到"change"事件后，更新页面

## 调用 render 时，DOM 一定会更新吗，为什么？

不一定

## React-router 的原理？

核心：基于 url 显示对应组件

## setState 何时同步何时异步？

自定义事件或者生名周期以外 是同步调用的；
生命周期以内 state 会批量异步更新，提高性能

## useCallback 和 useMome 详解? https://developer.aliyun.com/article/1365774

## 面试问题网址

https://blog.csdn.net/zbl1340301274/article/details/145024007

## 已学

1. css 引入和使用方法.多/单类名使用.动态渲染类名
2. 具名.默认导出
3. 组件封装
4. 生命周期
5. 获取真实 DOM useRef
6. 路由.子路由.动态路由.路由传值
7. ant design 的使用
8. 事件绑定.条件渲染
9. hooks 的使用（useState.useEffect.useRef 等钩子函数）
10. 父子组件传值
11. reduxjs/toolkitn stoer 数据管理
12. context 组件树传递数据的方法

## 用到的 hook 函数

useRef
useEffect
useState
useNavigate
useParams
useLocation
useSearchParams

**总结**
redux

1. 首先需要安装 reduxjs/toolkit
2. 导入 createSlice
   配置项：{
   name:'',（type 名字）
   initialState:[],（默认值）
   reducers:{
   函数名:function() {},
   函数名:function() {}
   }
   }
3. store 文件里导入我们 reducr 文件
   导入{configureStore}

# **====================================关于 router=============================================================================================================================================**

### React Router 是什么？有什么特点？

React Router 是一个基于 React 的路由库，用于实现单页应用(SPA)的导航功能。
它能让 URL 与页面内容保持同步，无需刷新整个页面即可更新视图
主要特点包括：
支持嵌套路由和动态路由
提供多种路由模式（BrowserRouter/HashRouter 等）
实现代码分割和懒加载
保持 URL 与 UI 同步

## React Router 有几种路由模式？  

主要有三种模式：
‌BrowserRouter‌：基于 HTML5 History API，URL 更简洁（如/home）
‌HashRouter‌：使用 URL 哈希（如/##/home），兼容性更好但 URL 不够美观
‌MemoryRouter‌：路由保存在内存中，不与地址栏同步，适合测试环境

## ‌ 路由传参的三种方式 ‌

传递：动态路由
路由配置中，例如 path: '/goods/:id'
<navigate path="/goods/:id" + id, {state:{}}>
获取的时候使用 useParams()钩子；
查询传参：就是我们的路径？后边跟的字符串
获取的时候就是用 useSearchParams()
隐式参数：子组件或者子页面想用但是不能在路径上展示 1. <navigate path="", {state:{}}> 2. <link path="" state={}> 3. 获取：useLocation().state

id 参数：path="/user/:id" + useParams()
查询参数：useSearchParams()
状态传递：navigate(path, { state }) + useLocation()

## React Router V5 和 V6 的主要区别？

<!-- V6 使用 createBrowserRouter 等新 API 替代了<BrowserRouter>组件 -->

V6 移除了<Switch>组件，改用<Routes>
v6 统一将 ‌ 组件渲染属性 component/render/children 三种方式，为 element 属性（需传递 JSX 元素）
编程式导航（history）、重定向组件（Redirect）改为 navigate
V6 移除正则路径匹配，支持更简洁的动态参数
V6 的路由配置更简洁，支持嵌套路由的自动匹配
嵌套路由通过<Outlet>自动渲染子路由，支持配置式嵌套

## 什么是受控路由和非受控路由？

‌ 受控路由 ‌：通过<Route>组件显式定义路由规则
‌ 非受控路由 ‌：通过<Link>或编程式导航触发的路由变化

## React Router 中的 push 和 replace 有什么区别？

push：在历史记录中添加新条目，可后退返回
replace：替换当前历史记录，不可后退返回

## 什么是路由守卫？如何实现？

路由守卫用于控制路由访问权限，可通过以下方式实现：
封装<Route>组件进行条件渲染
使用<Navigate>组件重定向未授权访问
在路由配置中添加元数据字段进行权限校验

## 如何实现懒加载路由？

1. 使用 React 的 lazy 和 Suspense 动态导入
   const Home = lazy(() => import('./Home'));
   <Route path="/home" element={
   <Suspense
   fallback={
   <Spinner />}> <Home />
   </Suspense>
   }
   />
2. link 配置 <Link prefetch="intent">
3. v7 版本
   import { createBrowserRouter, RouterProvider } from 'react-router-dom';
   const router = createBrowserRouter([  
    {  
    path: '/dashboard',  
    lazy: () => import('./Dashboard'),  
    children: [
   { index: true,
   lazy: () => import('./Dashboard/Welcome')
   } ]  
    }
   ]);

## 如何使用 createBrowserRouter？

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
{ path: '/', element: <Home /> },
{ path: '/about', element: <About /> }
]);

function App() {
return <RouterProvider router={router} />;
}

## 嵌套举例
