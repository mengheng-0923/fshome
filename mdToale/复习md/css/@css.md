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
# 盒子塌陷如何解决
盒子塌陷是因为相邻垂直的两个块级元素margin的会合并
1.解决触发bfc（块级格式化上下文）
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
# 如何清除浮动
1.触发bfc
2.使用伪元素
# inline inline-block block的区别
inline：不换行，不支持宽高
inline-block：不换行，支持宽高
block：换行，支持宽高
# display: none 和 visibility: hidden 有什么区别
display：none 隐藏的时候，不占空间
visibility: hidden 隐藏的时候占空间
# em 和 rem的区别
em是相对于我们的父元素的字体大小为基础，适用于一个盒子和他内部的字体呈现一个主次关系的时候使用
rem：是相对于根节点的字体大小为基础，适用于整个自适应，常用于移动端
# display有几种定位方式，有什么区别
1.fixed：固定定位，以可视窗口为基础进行定位，脱离文档流；
2.relative：相对自身为基础进行定位，自身原本的位置会保存。自身设置偏移的时候，原位置依然存在，不脱离文档流
3.absolute: 绝对定位，基于第一个配置relative属性的父元素，若没有的话，则以视口为基准，脱离文档流
4.sticky：粘性定位需指定 top、left 等阈值属性
# flex 常用的属性
display: flex;
justify-content: center/space-between/spsce-around/flex-start
align-items: center/flex-start
flex-wrap: nowrap/wrap/wrap-reverse
flex-direction: column/column-reverse/row/row-reverse
# flex 和 gird 有什么区别
flex： 一维 行或者列
gird： 二维 行和列
# css提高性能的方法
1.尽量少写通配符
2.少写嵌套或嵌套过深的css样式，提高解析效率
3.样式合并：类型样式单独生明，多处引用
# 什么是自适应？
自适应原理就是监听窗口大小，改变我们的盒子和字体大小，
通过window.addEventListener('onresize',() =>{}) + rem单位进行自适应调试
可以用淘宝的无限适配或者第三方库，+ rem
# 什么是响应式？
一个url可以响应多端，一套代码适配多端
1.弹性图片和媒体查询，通过断点为不同设备应用特定样式‌
通过@media only scree and (min-width/max-width/min-height/max-height){
    修改某个盒子样式
}
2.使用<picture>标签提供多分辨率适配‌
响应式图片：<source srcset='' media='(min-width: 100px)'></source>
<iframe><video>

# 文字超出省略号表示
{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
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
{
    width:0;
    height:0;
    border-left: 100ox solid transparent;
    border-right: 100ox solid transparent;
    boorder-bottom: 100px solid red;
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

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%)

display: flex;
justifty-content: center;
align-item : center;


absolute
transform
translate
ellipsis
direction
between
around
reverse
display
visibility
relative
hasOwnProperty
visibility
visible
transform
translate()
position
console.log
hasOwnProperty
media
