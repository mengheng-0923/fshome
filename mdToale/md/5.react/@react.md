# 谈谈react的理解
1.组件化：组件化开发，可以增加代码的复用率。
2.虚拟dom：在更新时react在js和真实dom中间引入俩来虚拟dom，减少对真实dom的操作，提高性能
3.单项数据流：react采用单项数据流的模式，让数据流动变得清晰可见，方便开发人员追踪和调试
4.声明式设计：采用声明式设计，开发人员只需要关注自己的逻辑，不需要注重内部实现逻辑
5.并发模式：react18的新特性，允许处理多条任务，提高渲染效率
6.任务批处理：可以把多个过更新，放在一起进行渲染
# 为什么虚拟dom会提高性能
其实是js和真实dom 中间加了一个缓存，利用diff算法，避免了没有要的dom操作
我们在操作更新真实dom的时候，其实成本是比较高的，所以采用虚拟dom，在更新时首先会创建一个新的虚拟dom，新旧虚拟dom进行diff算法比较，将差异放在一个对象里，当所有函数执行完以后，遍历对象再更新真实dom，从而提高性能
# react的diff原理是什么
React 的 diff 原理是其性能优化的核心机制，主要目标是在新旧两棵虚拟 DOM 树之间，通过最小数量的操作，计算出更新实际 DOM 所需的步骤。
Diff 算法只在同一层级进行比较，不会跨层级匹配移动的节点。如果一个组件从父节点 A 移到了父节点 B 下，React 会销毁 A 下的旧节点，并在 B 下重建新节点。
组件按照树形结构进行拆分
组件级别‌：
若组件类型相同（如相同 class 或函数组件），React 会复用实例并更新 props，触发生命周期方法；
若类型不同，则销毁旧组件并创建新组件
元素级别：
同类元素会比较元素的类型、属性和子节点。属性变化时仅更新变化的属性（如 className 或 style），而非重建整个节点
不同元素会删掉重建
子节点优化策略：
为列表项赋予唯一 key，帮助 React 识别节点的稳定性。通过 key 可以高效处理插入、删除或移动操作，避免不必要的重建
例如，若 key 匹配但位置变化，React 仅移动节点而非重新创建
复用机制:
Diff 算法的核心目标是复用现有 DOM 节点。通过上述策略，React 仅对必要的部分进行更新，例如移动节点位置或更新属性，而非全量渲染
这种优化显著减少了 DOM 操作的开销，提升了性能
# react的合成事件
react封装了我们浏览器所有的原生事件，提供跨浏览器兼容的 API
所有合成事件通过事件委托挂载到根节点（如document），而非直接绑定到DOM元素，减少内存占用并提升性能
React 使用事件池（Event Pooling）复用事件对象，减少内存分配。
事件触发：合成事件通过冒泡阶段统一处理，而原生事件需独立绑定。
# react的生命周期
函数组件：可以通过useEffect() hook函数实现
类组件：
      初始化：
        constructor()定义状态/初始化一些属性；
        stic getDirvideStateFormProps 通过props更新state
        raden 函数
        componmentDidMount 挂哉结束
      更新阶段:
        stic getDirvideStateFormProps
        getSnapshotBeforeUpdata 更新操作返回给Dom之前进行掉用
        componmentDidUpdate() 更新结束
        shouldComponmentUpdate 优化函数没返回一个布尔值，决定是否更新组件
      卸载阶段：
        componmentWillUnmount 
      错误捕获
        conmponmentDidCatch 错误捕获
# 有哪几种定义组件的方式
类组件：class MyComponent extends React.pureComponent(
            render() {
            constructor(props) {
            super(props)
            this.state={}
            }
            shouldComponmentUpdate(porps,state) {
                return false/trun
            }
            return(<></>)
           }
        )
函数组件：function Mycomponment() {
           const [num , setNum] = useState(2)
           const Memo = useMemo(()=>{})
           const useCallBack = useCallBack(()=>{})
           return (<></>)
          }

两者有什么区别?
1.优化方式不一样
2.返回组件的方式不一样
3.生命周期函数不一样
4.声明变量的方式不一样
5.缓存方式不一样
# 目前类组件还有那些是函数组件做不到的？
错误边界：错误边界是类组件，通过实现特定生命周期方法（如 componentDidCatch 或 static getDerivedStateFromError）捕获子组件抛出的未处理错误‌  
# （在构造函数中）调用 super（props）的目的是什么？  
 子类构造函数中调用父类的构造函数,能在 constructor 访问 this.props。使 this.props 可用        
# React 中的 key 属性有什么作用
1.react在进行diff算法的是时候，方便react进行精准定位，减少不必要的渲染。
2.帮助react识别追钟哪些元素进行修改、新增、删除
# react什么是时候会重新渲染
1.父组件更新的时候
2.props/state更新的时候
3.上下文（Context）变化
4.强制更新：调用类组件的 forceUpdate() 方法
重新渲染时 react 会生成新的虚拟 DOM 树，和旧的虚拟 DOM 使用 diff 算法对比，将差异放入一个对象中，然后遍历该对象，更新真实 DOM
# react 性能优化/避免重复渲染的方法有哪些
类组件：
  a.可以使用pureComponent创建组件
  b.使用shouldComponentUpdate这个生命周期函数
函数组件
  a.使用react.useMome创建类组件
  b.使用useCallBack()、useMemo()钩子函数，缓存值和缓存函数
通用：合理差分组件，避免大组件渲染，减少匿名函数和对象的频繁创建
# setstate 后发生了什么
1.新旧state合并
2.将更新放在更新队列里
3.根据新的state触发render函数
4.创建虚拟dom，开始进行diff算法
5.找出差异更新真实dom
# 为什么建议传递给 setState 的参数是一个 callback？而不是一个对象？
porps和state 是一个异步操作，不能根据他们作为计算下一个state
函数的话 获取的都是最新的
// 错误示例：可能基于过期state计算
this.setState({count: this.state.count + 1}); 
// 正确示例：通过回调获取最新state
this.setState(prevState => ({count: prevState.count + 1}));
# 为什么 useState 要使用数组而不是对象
灵活性：数组解构赋值允许开发者自定义变量名
扩展性：如果未来useState有扩展属性，可以执行添加代码不用修改
一致性：我们useContext返回的就是一个数组格式
# React 很多个 setState 为什么是执行完再 render
避免频繁的调用 setState 导致频繁的操作 dom，提高渲染性能。
# useEffect第二个参数的不同用法
不传：组件更新就会触发
空数组：仅在挂载和卸载的时候执行，不会因为状态变化的时候更新
一个参数：参数变化的时候就会执行
# 组件的state 和props 有什么区别
props相对于state 来讲是不可变的
props是外部传入 state 是内部声明  
# react 中的hook是什么
定义：可以让函数组件变得更强大、更灵活的钩子
比如useState、useEeffect、useRef、useContext、useMome于缓存计算结果、useCallBack缓存函数引用
# hook函数有哪些限制
1.必须是以use开头
2.只能在类组件或者自定义hook函数中的顶层调用，不能在条件、循环或者嵌套函数中调用
原因是：React 依赖 Hook 的调用顺序匹配状态，顺序不一致会导致状态错乱
# hook 解决那些问题
1.函数组件定义自己的状态
2.函数组件不能使用react函数周期特性
# react 中的ref是什么
react的一种引用机制，用于获取组件里真实dom
使用方法：类组件：react.createRef()/函数组件可以使用useRef()、通过current进行访问
          标签里可以通过ref = {this.myRef}进行绑定、或者函数进行绑定
何时使用：页面初始化元素自动获取焦点
          不通过state直接获取表单元素的值
          文本选择
          浏览器原生API进行交互
          集成第三方库
# react 如何进行传值
1.父传子：prpos
2.子传父：通过父组件暴露的函数传值
3.相邻/跨组件：使用store/context
# react 父组件怎么使用子组件的方法
通过 forwardRef 和 useImperativeHandle 钩子实现，适用于函数组件和类组件
# React 中的 Context 是什么？如何使用？
是react中组件传递数据的一个方法
使用：
    1.const myContexr = React.CreatContext()
    2.创建一个AppProvider里面存储状态
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
    2.const data = useContext(myContexr)
注意事项：
    想要使用 context 里的数据，组件必须在，通过 Provide 包裹的组件树中
# react中的高阶组件（HOC）是什么？如何使用
是一个函数，入参是一个组件，出参是一个增强组件；
‌数据注入‌：如通过 HOC 获取 API 数据并传递给子组件
‌权限控制‌：封装鉴权逻辑，动态渲染组件
# 什么是无状态组件，与有状态组件的区别？
区别主要在于，内部是否维护了自己的state
无状态组件根据props来着渲染dom
# 何为受控组件？
受不受控核心区别在于谁拥有表单数据的“唯一真相来源”
受控组件指的是其表单数据（value）由 React 状态（state） 来管理和控制的组件。数据的唯一“真相来源”不再是 DOM 本身，而是 React 组件的 state。
在受控组件模式中，表单元素（如 <input>, <select>, <textarea>）的值（value 或 checked 属性）始终由 React 组件的状态（state）驱动。DOM 元素本身不维护自己的状态。

非受控组件更类似于传统的 HTML 表单行为。表单数据存储在 DOM 节点自身内部，而不是 React 组件的 state 中。
区别：
    受控组件会在元素上绑定onchange事件，触发时通过setState更新state，根据新的state来更新dom元素
    非受控是通过访问dom读取数值，更新也不会更新state
# 调用 render 时，DOM 一定会更新吗，为什么？
不一定；虚拟 DOM 比对后未发现有效差异
# react 动画
1.项目中一些简单的动画我们使用css原生
2.复杂的动画可以使用Framer Motion /React Transition Group ==> CSSTransition
3.第三方库React Spring
# react-window 实现虚拟列表
从react-window中导入List组件，通过配置overscanCount属性实现虚拟滚动按钮加载
react-virtual-list
react-virtualized
react-window