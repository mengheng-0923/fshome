# ===================================================================== js 基本问题===============================================

## ‌ 数据类型 ‌

原始类型：string、number、boolean、null、undefined、symbol。
引用类型：object（含 array、function）

## js 的执行顺序？

先执行同步任务 =>变量声明与赋值： for 循环 log 打印
微任务==> promise async/await：await 后的代码相当于微任务
宏任务==》事件 。请求 定时器

## js 的继承有哪些？

**方式一：es6 继承**

class son extends parent() {
constructor() {
super()
this.age = '21'；
}
}
**方 2： 原型连继承**
function parent() {
this.age = '21';

}
Son.proryotype= new Parent()
function Son() {
this.name = '美团';
}
let sondata= new Son()
**方式三： 构造函数继承**
function parent() {
this.age = '21';
}
function Son() {
parent.call(this)
this.name = '美团';
}
let sondata= new Son()

## new 操作符具体干了什么呢?

1. 创建一个空对象。
2. 将空对象的原型，指向构造函数的原型；
3. 将空对象作为构造函数的执行上下文（改变 this 指向）
4. 对构造函数有返回值的判断

## 原型和原型链有了解吗？

原型：
解决对象共享属性和方法
每个函数创建时都会自动生成一个 prototype 属性，称为显式原型（例如 Person.prototype）。该属性指向一个对象，存储该函数所有实例共享的属性和方法 ‌

原型链：
每个对象都有**proto**属性（隐式原型），指向其构造函数的 prototype 对象。当访问对象属性时：
先在自身查找
未找到则通过**proto**向上一级原型查找
直到 Object.prototype（顶级原型，其**proto**为 null）‌

## 变量声明

var、let、const 的区别：var 存在变量提升和函数作用域，
let/const 为块级作用域且存在暂时性死区（TDZ），不可重复声明
const 声明后不可重新赋值

## 字符串的方法有那些？

charAt() / charCodeAt()：获取指定位置字符或编码
indexOf() / lastIndexOf()：查找子串位置
includes() / startsWith() / endsWith()：判断包含或首尾匹配
slice() / substring()：按索引截取子串
split()：按分隔符拆分为数组
replace() / replaceAll()：替换子串
toLowerCase() / toUpperCase()：大小写转换
trim() / padStart()：去除空格或填充字符
concat()：连接字符串
repeat()：重复字符串

## 找出字符串出现最多字符？以及个数

答案见闭包

## 数组有哪些操作方法？

新增：
push(y) 末尾添加一个数组，返回新长度
unshift(y) 开头添加 返回新长度
删除:
shift(y)删除第一个，返回删除的元素
pop(Y) 删除最后一个元素，返回删除的元素
slice(n) 截取 参数可以是一个两个 或者是负数
合并数组 concat()：合并数组，返回新数组
splice(y)移除或者替换已存在的元素和/或添加新的元素
查找： indexOf() find() includes()
排序：
sort() 根据 unicode 码点进行排序
sort 可以传递一个函数
const data = arr.sort(function(a,b) {
return a - b
})
reverse()
转换： join()
迭代： map() filter() forEach() somn() every()

## 数组去重？

Array.form(new Set(arr))
[... new Set(arr)]
封装成一个函数
function unique(arr) {
return [...new Set(arr)]
}

## 合并对象？

Object.assign(a,b)
扩展运算符{...a,...v}

## this 指向 ‌

全局中指向 window，
对象方法中指向调用者，
箭头函数继承外层 this，他的指向也不会被修改，也是不能当作构造函数，也米有原型
修改方法：call、apply、bind

## 如何避免 JavaScript 中 this 指向错误?

‌ 箭头函数 ‌（简洁安全）
‌ 显式绑定 ‌（灵活控制）
‌ 构造函数绑定 ‌（类实例场景）
‌ 闭包保存 ‌（兼容旧代码）
**箭头函数继承外层作用域的 this，避免因调用方式改变上下文**
const obj = {
name: "百度 AI",
greet: () => console.log(this.name) // this 继承外层（如全局或类实例）
};
**显式绑定（call/apply/bind**
function log() { console.log(this.id); }
const item = { id: 123 };
log.call(item); // 显式绑定 this 到 item
**构造函数或类中提前绑定**
class Person {
constructor(name) {
this.name = name;
this.sayHello = this.sayHello.bind(this); // 提前绑定
}
sayHello() { console.log(this.name); }
}
**保存外层 this（闭包）**

## null，undefined 的区别？

null 表示一个对象被定义了，但存放了空指针，转换为数值时为 0。
undefined 表示声明的变量未初始化，转换为数值时为 NAN。
undefined：
　　（1）变量被声明了，但没有赋值时，就等于 undefined。
　　（2) 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
　　（3）对象没有赋值的属性，该属性的值为 undefined。
　　（4）函数没有返回值时，默认返回 undefined。

## == 和=== 的区别？

== 比较的是值（会有一个 valueOf 的隐式转换）
数字和字符，字符转换成数子
布尔值回转换成数字
=== 比较类型和值

## 深拷贝和浅拷贝的区别？

深拷贝和浅拷贝是对象复制的两种核心方式，主要区别在于对嵌套引用数据的处理深度和独立性
复制深度 ‌
‌ 浅拷贝 ‌
仅复制对象的第一层属性，嵌套对象仍与原对象共享内存引用。修改嵌套对象时会影响原对象
示例：Object.assign()、展开运算符 ...、数组的 slice() 方法
‌ 深拷贝 ‌
递归复制所有层级的对象，生成完全独立的新对象。修改任何属性均不影响原对象。
示例：JSON.parse(JSON.stringify())（有局限性）、递归实现或第三方库如 lodash.cloneDeep()
性能方面浅拷贝要胜于深拷贝

## Javascript 中的执行上下文和执行栈是什么？

执行上下文：
执行上下文是对 Javascript 代码执行环境的一种抽象概念，只要有 Javascript 代码运行，那么它就一定是运行在执行上下文中；

执行上下文的类型分为三种：
全局执行上下文：只有一个
函数执行上下文：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文
Eval 函数执行上下文：指的是运行在 eval 函数中的代码，很少用而且不建议使用
执行栈：
执行栈，也叫调用栈，用于存储在代码执行期间创建的所有执行上下文；
当 Javascript 引擎开始执行你第一行脚本代码的时候，它就会创建一个全局执行上下文然后将它压到执行栈中
每当引擎碰到一个函数的时候，它就会创建一个函数执行上下文，然后将这个执行上下文压到执行栈中
引擎会执行位于执行栈栈顶的执行上下文(一般是函数执行上下文)，当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个执行上下文

## 说说你对 Javascript 作用域的理解？

作用域是指变量与函数的可访问范围
全局作用域：对象在代码中的任何地方都能访问，其生命周期伴随着页面的生命周期。
函数作用域：在函数内部定义的变量或者函数，并且定义的变量或者函数只能在函数内部被访问。函数执行结束之后，函数内部定义的变量会被销毁。
块级作用域: 使用一对大括号包裹的一段代码，比如函数、判断语句、循环语句，甚至单独的一个{}都可以被看作是一个块级作用域。

1. 除了函数外，js 是没有块级作用域。
2. 作用域链:内部可以访问外部的变量，但是外部不能访问内部的变量注意:如果内部有，优先查找到内部，如果内部没有就查找外部的。
3. 注意声明变量是用 var 还是没有写(window.)
4. 注意:js 有变量提升的机制【变量悬挂声明】变量提升
5. 优先级:声明变量>声明普通函数 >参数>变量提升

## 说说你对闭包的理解以及使用场景？

在 JS 中，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。
如果闭包使用不正确，会很容易造成内存泄漏，如果该闭包会一直使用，那么它可以作为全局变量而存在；
任何闭包的使用场景都离不开这两点：
创建私有变量
延长变量的生命周期

## typeof 和 instanceof 的区别？

typeof：
用来判断基本数据类型，但是 typeof null 返回的是 Object，这只是 JavaScript 存在的一个悠久 Bug，不代表 null 就是引用数据类型，并且 null 本身也不是对象
引用类型数据，用 typeof 来判断的话，除了 function 会被识别出来之外，其余的都输出 object
instanceof：
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
主要检测引用数据类型，检测基本类型都返回 false;
区别：
typeof 会返回一个变量的基本类型，instanceof 返回的是一个布尔值
instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
而 typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了 function 类型以外，其他的也无法判断
如果需要通用检测数据类型，可以采用 Object.prototype.toString，调用该方法，统一返回格式“[object Xxx]”的字符串

## 阻止事件冒泡

event.stopPropagation()

## 什么是 window 对象? 什么是 document 对象?

window 对象代表浏览器中打开的一个窗口。
document 对象代表整个 html 文档。实际上，document 对象是 window 对象的一个属性。

## DOM 操作

创建新节点
createDocumentFragment() //创建一个 DOM 片段
createElement() //创建一个具体的元素
createTextNode() //创建一个文本节点
添加、移除、替换、插入
appendChild()
removeChild()
replaceChild()
insertBefore() //在已有的子节点前插入一个新的子节点
查找
getElementsByTagName() //通过标签名称
getElementsByName() //通过元素的 Name 属性的值(IE 容错能力较强，会得到一个数组，其中包括 id 等于 name 值的)
getElementById() //通过元素 Id，唯一性

## Windows 响应事件

onclick 鼠标点击某个对象；onfocus 获取焦点；onblur 失去焦点；onmousedown 鼠标被按下

## 那些操作会造成内存泄漏

全局变量、闭包、DOM 清空或删除时，事件未清除、子元素存在引用
　内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
　垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
　 setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
　闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）。

## Number.isNaN()

只要不是数字都会返回 false

## JSON 的了解？

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于 JavaScript 的一个子集。数据格式简单, 易于读写, 占用带宽小。
　　格式：采用键值对，例如：{“age”:“12”, “name”:“back”}

## call()、bind() 和 apply() 的区别和作用？

作用：改变函数的指向
区别：

1. call 和 apply 都会立即执行 bind 不会立即执行。他返回的是一个函数，需要再调用
2. call 和 bind 传参的时候是一个参数序列，apply 是一个数组
   使用场景：其实是根据你传递的参数进行决定 如果说要传递数组就用 apply,例如 Math.max.apply(null, arr)
   希望他改变指向又不能立即执行的时候用 bind

## cookie 和 session 的区别：

（1）cookie 数据存放在客户的浏览器上，session 数据放在服务器上。
（2）cookie 不是很安全，别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺骗考虑到安全应当使用 session。
（3）session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
考虑到减轻服务器性能方面，应当使用 COOKIE。
（4）单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存 20 个 cookie。
（5）所以个人建议：
将登陆信息等重要信息存放为 SESSION
其他信息如果需要保留，可以放在 COOKIE 中

## localstorage、sessionStorage、cookei 有什么区别

1.有效期：localStorage 和 cookie 持久化存储 sessionStorage 是会话级存储
2.cookie 是可以设置过期时间，另外两个不可以
3.cookie 是 4k 其余两个是 5m

## 如何实现浏览器内多个标签页之间的通信?

调用 localstorge、cookies 等本地存储方式
// 发送方
localStorage.setItem('key', JSON.stringify({ data: 'value' }));

// 接收方
window.addEventListener('storage', (e) => {
if (e.key === 'key') console.log(JSON.parse(e.newValue));
});

## js 延迟加载的方式有哪些？

defer 和 async、动态创建 DOM 方式（创建 script，插入到 DOM 中，加载完毕后 callBack）、按需异步载入 js。
defer：等 html 解析完了以后，再执行我们的 js 代码。按照导入顺序执行
async：和 html 一起执行，谁先加载完谁先执行

## localstorage 和 sessionstorage

localstorage : 持久化本地存储，需要手动清除，内存大小限制在 5mb，可以跨标签页同源共享
sessionstorage: 页面关闭就失效，会话级临时存储。内存为 5mb，仅当前标签页共享

# ====================================================================== Promise =================================================
promise 是处理异步操作的解决方案
## 特性

pedding（进行）；fullfilled（成功） ；rejected（失败）

## 链式调用

上一个 then 的返回值作为下一个 then 的输入

## 静态方法

Promise 还提供了一些常用的静态方法：
• Promise.resolve(value)：返回一个成功状态的 Promise。
• Promise.reject(reason)：返回一个失败状态的 Promise。
• Promise.race([p1, p2, ...])：第一个改变状态的 Promise 决定结果。
• Promise.allSettled([p1, p2, ...])：等所有 Promise 都结束（无论成功失败），返回每个结果。
• Promise.all([p1, p2, ...])：所有成功才成功，有一个失败就失败。
• Promise.any([p1, p2, ...])：第一个成功的返回，只要有一个成功就不会失败。

## 不可取消

一旦执行不会取消 除非自己封装取消机制、

## 异步回调

不会影响主线程

### 错误冒泡

then 会被 catch 函数捕获到

**创建 基础操作**
const fetchData = () => {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
   const success = Math.random() > 0.3;
    success ? resolve("数据加载成功") : reject("网络错误");
     }, 1000);
   });
};

fetchData()
.then(data => console.log(data))
.catch(error => console.error(error));
**核心方法：**
then():
catch();
finally();

promise.then(result => console.log(result))
.catch(error => console.error(error))
.finally(data=> console.log(data))

## Promise.all()和Promise.race()有什么区别  
Promise.all()：所有 Promise 成功时返回结果数组，任一失败立即终止
Promise.race()：取最先完成的 Promise 结果。在一个就是可以做请求超时控制

## Promise 与 async/await‌

Promise 解决回调地狱，状态为 pending/fulfilled/rejected
async/await 是语法糖，基于 Promise 实现同步写法

‌Promise 是基础‌：async/await 底层依赖 Promise，所有 await 表达式都会返回 Promise。
‌适用场景‌：
‌Promise‌：适合简单异步操作或需要组合多个 Promise 的场景（如 Promise.all）。
‌async/await‌：适合复杂异步逻辑，尤其是需要顺序执行的代码。

# ====================================================================‌ 防抖与节流 ‌================================================

**防抖：连续触发时只执行最后一次（如搜索框）**
function debounce(fn, delay) {
let timer;
return function(...args) {
clearTimeout(timer);
timer = setTimeout(() => fn.apply(this, args), delay);
}
}

// 使用
window.addEventListener('resize', debounce(() => {
console.log('调整结束再执行');
}, 500));

**节流：固定时间间隔执行一次（如滚动事件）**
function throttle(fn, delay) {
let last = 0;
return function(...args) {
const now = Date.now();
if (now - last >= delay) {
fn.apply(this, args);
last = now;
}
}
}

// 使用
window.addEventListener('scroll', throttle(() => {
console.log('滚动中，每 500ms 执行一次');
}, 500));

## ‌ 性能优化 ‌

减少 DOM 操作，使用事件委托

## 写一个 chuck 方法 分割数组

function chunk(arr, size) {
if (!Array.isArray(arr) || size <= 0) return [];
let res = [];
for (let i = 0; i < arr.length; i += size) {
res.push(arr.slice(i, i + size));
}
return res;
}

// 示例
console.log(chunk([1,2,3,4,5,6,7], 3));
// [[1,2,3],[4,5,6],[7]]
