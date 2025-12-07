# 盒子模型
标准盒子模型: margin、padding、border、content
ie盒子模型: margin、content(padding border content)
box-sizing: content-box
# css 有哪些选择器
类选择 .div{},
id选择 #div{}
标签 div{}
后代选择 div ul{}
相邻选择器 div + li
# 可继承属性
font-size
font-family
font-weight
ling-height
font-style
color
text-align
# css的优先级规则
!important > id > 类 > 标签 > 通配符 
# css引入的三种方式
内联：样式写在标签里
内部样式：写在header里的样式
外部引入：便于维护
# margin 为什么会塌陷？
垂直方向相邻块级元素 margin 会重叠
# 盒子塌陷如何解决 / 如何清除浮动
盒子塌陷是因为相邻垂直的两个块级元素margin的会合并
1.解决触发bfc（块级格式化上下文：页面上一个独立容器，容器里元素不会影响外面的元素）
a.overflow：不能设置为visible
b.display: inline inline-block
c.flot: 非none
d.position: 设置为absoute、fixed
2.使用伪元素
::before{
    content:'';
    display: block;
    clear:both;
}
# 什么是伪类 和伪元素
伪类: 表示一种状态，例如:first-child :hove
为元素：是真实元素,例如::after ::before
# inline inline-block block的区别
inline：不换行，不支持宽高
inline-block：不换行，支持宽高
block：换行，支持宽高
# display: none 和 visibility: hidden 有什么区别
display：none 隐藏的时候，不占空间
visibility: hidden 隐藏的时候占空间
# :nth-child 和 :nth-of-type 的区别？
区别是第几个子元素，第二个是累类型相同的
# --var 的作用？
生命css的一些变量
# em 和 rem的区别
em是相对于我们的父元素的字体大小为基础，适用于一个盒子和他内部的字体呈现一个主次关系的时候使用
rem：是相对于根节点的字体大小为基础，适用于整个自适应，常用于移动端?
# position有几种定位方式，有什么区别
1.fixed：固定定位，以可视窗口为基础进行定位，脱离文档流；
2.relative：相对定位，元素先按正常位置排列，再偏移（保留原空间）‌不脱离文档流
3.absolute: 绝对定位，基于第一个配置relative属性的父元素，若没有的话，则以视口为基准，脱离文档流
4.sticky：粘性定位需指定 top、left 等阈值属性
# flex 常用的属性
display: flex;
justify-content: center/space-between/spsce-around/flex-start
align-items: center/flex-start
flex-wrap: nowrap/wrap/wrap-reverse
flex-direction: column/column-reverse/row/row-reverse
# flex : 1 是什么意思？
等价于 flex-grow: 1; flex-shrink: 1; flex-basis: 0
flex-grow: 1：元素会按比例分配容器中的剩余空间。若多个元素均设为 1，则均分剩余空间‌
flex-shrink: 1：当空间不足时，元素会按比例收缩‌
flex-basis: 0%：元素初始尺寸为 0，完全依赖剩余空间计算最终大小‌
主内容区自动填充剩余空间‌
# 两边固定宽度100px，中间自适应，窗口缩到很小的时候，两边的盒子宽度会被压小怎么解决
min-width;和flex-shink
# flex 和 gird 有什么区别
flex： 一维 行或者列
gird： 二维 行和列
Flex 适合线性排列，Grid 适合网格布局
# less和sass预处理器的区别
Sass是通过$声明变量 less是通过@符生命变量，两者都可以内嵌
sass支持if语句和循环语句 ，less不能
Sass支持块级作用域（如 @mixin 内部变量）
# CSS 变量 vs SASS/LESS 变量？
 CSS 变量（–var）：运行时可变，支持 JS 修改。
 SASS/LESS 变量：编译时确定，运行时不可变。
# css提高性能的方法
1.减少CSS文件大小
复用样式，减少重复代码。
合并文件：减少http请求
压缩css文件:删除未使用的样式，或者注释
删除未使用的css，避免引入冗余代码
2.优化CSS选择器
尽量不使用复杂选择器，最好使用class，减少嵌套，利于文件解析
3.减少重绘和重排
避免频繁操作DOM‌：批量修改样式，减少回流‌
4.异步加载CSS
首屏样式直接嵌入HTML，提升渲染速度
# 什么是自适应？
自适应的话就是我i们可以预先设定多个固定版本，moblie iped pc网站会检测设备类型，然后根据类型先显示哪个版本
# 什么是响应式？
我们可以通过flex，白分比，rem像这些布局，可以通过屏幕尺寸大小，改变我们的内容布局，一套方案使用多段好维护一些
掌握响应式布局的核心（媒体查询 + Flex/Grid）
# 文字超出省略号表示
{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
# 画一个三角形
{
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 100px solid red;
}
# 盒子水平垂直剧中
display:flex;
justifty-content: center;
align-items:center;

display:grid
place-items:center

position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
# 优化首屏加载时间
懒加载，延迟加载非首屏内容 loading="lazy" 
代码分割，动态导入
资源压缩合并 减少请求数量
使用 cdn 加载静态资源
# 什么是 css resetcss
重置样式库:重置我们元素的样式
resetcss: normalize.css 一个 css 
# 层叠上下文
定义：层叠上下文（Stacking Context）是CSS中用于控制元素在Z轴（垂直于屏幕）上堆叠顺序的机制。
      它决定了哪些元素会覆盖在哪些元素之上，是解决z-index不生效、元素重叠显示异常等问题的关键‌
形成条件：
    1.根元素‌：<html>元素天生具有层叠上下文
    2.定位元素‌：position属性为relative、absolute或fixed，且z-index值不为auto
    3.‌CSS3属性‌：opacity小于1、transform不为none、filter不为none
在同一个层叠上下文中，元素在Z轴上的堆叠顺序（从后到前）为：
    创建层叠上下文的元素的背景和边框。
    堆叠级别（z-index）为负值的子元素。
    常规流中的非定位块盒。
    非定位的浮动盒子。
    常规流中的非定位行盒。
    任何z-index为auto的定位子元素。
    堆叠级别为正值的子元素‌
特点：
    独立性:每个层叠上下文是独立的，其内部的层叠顺序不会影响外部的元素‌
    嵌套性L:层叠上下文可以嵌套，子元素的层叠顺序仅在其父层叠上下文中生效‌
实际应用‌
    ‌解决z-index不生效‌：确保元素设置了position属性且z-index不为auto‌
    ‌控制元素堆叠‌：通过创建层叠上下文，可以精确控制特定区域内元素的堆叠顺序，避免全局z-index的干扰‌