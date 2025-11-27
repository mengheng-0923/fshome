# var let const 有什么区别
1.var 有变量提升 let const 没有
2.let const 有自己的作用域 var没有
3.let const 不能重复声明变量名 var 可以
4.const 不能进行重新赋值
# js的执行顺序/循环机制
1.先执行同步任务，例如for循环、变量声明和赋值
2.执行微任务，例如promise、ansyc/awit awit后边跟的就是微任务
3.宏任务，例如我们发起的请求、点击事件、setTimeout
# js延迟加载的方法有那些
1.defer:html文件解析完以后在下载我们的js文件，会根据引入的先后顺序加载js文件。
2.ansyc：html和js一起解析，不会按照顺序，谁先加载完就执行谁
# js继承有哪些方法
1.es6类继承
2.原型链继承
3.构造函数继承
# new 操作符具体都做了什么
1.首先创建了一个空对象
2.对象的原型指向构造函数的原型
3.构造函数的this指向该对象
4.对构造函数的返回值做饭判断处理
# 原型和原型链的了解
原型：当我们创建一个构造函数的时候，该函数就会生成一个prototype 显式原型，他指向一个对象，对象存储属性和方法；
原型链：每个对象都会有__proto__隐式原型。指向其构造函数的prototype，访问对象属性的时候
对象自身查找、构造函数、对象原、构造函数、一层一层往上查找，直到object.protoptype为null停止；
# 作用域的了解
作用域其实就是变量和方法可访问的范围我们叫作用域
全局作用域：只有一个。对象和函数可以全局任何地方访问
函数作用域：每当创建一个函数就回有个一个函数作用域，属性和方法可以在函数内部进行访问或者调用，调用结束以后变量会被销毁
块级函数作用域：if语句的大括号、函数、判断语句、循环语句或者是单数的一个大括号都是一个块级作用域
# js中的执行上下文和执行栈是什么
执行上下文其实就是js执行环境的一个抽象概念；
我们的js代码执行了就会有全局指向上下文
全局执行上下文；函数只要执行就会生成
函执行上下文：只有在函数被调用的时候会生成一个函数执行上下文，有无数个
Eval函数指向上下文：运行在 eval 函数中的代码
这个指向上下文存储的地方就是执行栈
js引擎在运行我们的脚本的时候，他就会生成一个执行上下文，然后将他压在执行栈中，
当引擎碰到函数的时候就是生成一个函数执行上下文，然后在压到我们的执行栈里
引擎会首先执行栈顶的内容，一般是函数执行上下文，执行完以后该函数执行上下文会被弹出。然后控制流程到执行栈的下一个执行上下文
# 深浅拷贝有什么区别
浅拷贝：浅拷贝拷贝出来的数值，他们的引用内存地址还是同一个，所以新旧对象哪一个发生改变，两个都会受到影响
常用方法：Object.assign(target, source)
深拷贝：他是拷贝真正的值，内存地址也不一样，新旧对象发生改变互不干扰。
常用方法：JOSN.parse(JSON.stringify())、递归
# 普通函数和箭头函数的区别有哪些？
箭头函数是没有prototype、agrus、最重要的是箭头函数不能改变自己的this指向
# 什么是window对象和document对象
window是指的窗口
document是整个html结构，其实documnet是window对象里的一个属性
# 谈谈this指向问题
构造函数如果在全局的情况下是指向window
对象中的构造函数则指向调用者
箭头函数继承外层 this
# 如何避免 JavaScript 中 this 指向错误?
 箭头函数 ‌（简洁安全）避免因调用方式改变上下文
‌ 显式绑定 ‌（灵活控制） 
# call、bind、apply、有什么区别
1.bind返回的是一个函数，所以不会立即调用，call和apply是立即调用的
2.call和bind除了第一个指向参数以为，我们可以在后边配置一个参数序列，apply是一个数组
使用场景
1.我们想改变他的指向但是需要再调用的时候可以使用bind
2.如果我们想要后边传递的是一个数组的时候可以使用apply，例如Math.max.apply(_,[arr])
# null 和undefind有什么区别
1.null表示对象被定义了，但是被放在空指针里的，转换数值就是0
2.undefind是声明但是没有赋值，转换为数值的话是NaN
例如函数没有返回值
声明变量没有赋值
调用用函数时，应该提供的参数没有提供
对象里没有赋值的属性
# == 和 === 的区别
1.===会对比字符类型和值，而 == 只会比较他们的值。
2.==比较的时候类型不一样但是会返回true，其实js内部听valueOf做了隐式转换 例如我们true和1进行比较的时候就会吧true转换为1进行比较 
# typeof 和 instanceof 的区别
1.typeof用于判断基本数据类型，返回的是数据的类型
2.instanceof用于判断引用数据类型，返回的布尔值（用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链）
# localstorage 和 sessionstorage、cookie 有什么区别
1.localstorage：本地化存储，会存放在浏览器上。需要手动清除。大小内5mb，可以同浏览跨标签共享
2.sessionstorage：会话级存储，页面关闭会失效，大小也是5mb，不过只能同标签共享
3.cookie：它可以设置过期时间，另外两个做不到
# cookie 和 session的区别
1.cookie：保存在浏览器上，所以可以查到，安全性不高
2.session：存储在服务器上的，安全性比cookie要强，不过能使用的内存小。过大会影响浏览器性能
3.所以要分情况存放，客户的登录信息、身份信息可以放session，其余的放cookie
# 如何实现浏览器内跨标签共享
1.localstorge、cookies
localStorage.setItem('crossTabMsg', JSON.stringify(msgObj));
存储到localStorage（会触发storage事件）
window.addEventlinstener('storage')
# DOM操作
添加：appendchild()
删除：removechild()
替换：replaceclild()
元素前：insertBefore()
查找：getElenmentById、getElementByName
创建节点：createElement()、createTextNode()
# 数组的操作方法
新增：unshift()、push() 返回新数组的长度，会改变数组
删除：pop()、shift() 获取被删除的元素。会改变原数组
查找：indexof()没有返回-1，find()
转换：jion()
排序：sort(y)
反转：reserve()
迭代：map、forEach、filter...
slice()：截取 （不会修改原数组，返回一个新数组） 
splice() 移除或者替换已存在的元素和/或添加新的元素。获取一个新数组，会改变原数组
去重：Array.form(new Set(arr))
# 字符串的操作方法
查找：chatAt()/chatCodeAt()查某个下标的字符
替换：replace()/replaceALL() 替换/全部替换
slice() splice()
split():按分隔符拆分为数组
indexOf() lastIndexOf()
includes()/判断是否包含
startsWith/endsWith()首位是否匹配
concat() 拼接字符串
# forin 和forof有什么区别
forin遍历对象 forof 便利数组
# 判断是否是数字
 Number.isNaN('1') false
# 防抖和节流
防抖：连续触发时只执行最后一次（如搜索框）
节流：固定时间间隔执行一次（如滚动事件）
# es6 有哪些新特性
let与const、模板字符串、扩展运算符、结构赋值、箭头函数set数组去重、promise、Symbol
# get 和post的区别
1.get是向服务器请求数据,post是向服务器发送数据
2.get的参数是放在url上的,post是放在服务器上的,所以安全性比get强
3.get请求是会被浏览器缓存到,post不可缓存也不会保留历史记录
