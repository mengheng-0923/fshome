# =====================================================================================基本问题========================================

## 介绍一下盒子模型：

标准的盒子模型： 标准黑子模型、ie 盒子模型
标准盒子： margin、border、padding、content
ie： margin、content（border、padding、content） border-box
可以通过 box-sizing 进行配置 content-box

## css 有哪些选择器？

id 选择器(#)、类选择器（.）、通配符{\*}、标签选择器（p、div、h1...）、后代选择器（ul li{}）、相邻选择器
后代+ 相邻选择器 :场景例如第一个元素不加上边框(ul li + li {})
子元素选择器
属性选择器

## 可继承的属性 ‌

1. 字体相关
   font-family（字体族）
   font-size（字体大小）
   font-weight（字体粗细）
   font-style（字体样式，如斜体）
   line-height（行高）‌
2. 文本相关
   color（文本颜色）
   text-align（文本对齐方式）
   text-indent（文本缩进）
   letter-spacing（字符间距）
   word-spacing（单词间距）
   text-transform（文本大小写转换）‌

## line-high 和 height

line-height： 每一行文字的高，如果文字换行 则会撑大盒子
height： 就是盒子的高度

## CSS 的三种引入方式？优缺点？

• 内联样式（style=””）：只作用于当前元素，优先级最高，但复用性差。
• 内部样式（）：写在页面 head 里，适合小型项目。
• 外部样式（.css 文件）：通过 <link> 引入，利于复用和维护，推荐。
使用 link 和 import 有什么区别
link 的兼容性比 import 好，尤其是在 ie 浏览器
link 会比 import 先加载

## 优先级规则？

!important > 内联 > ID 选择器 > 类/伪类/属性选择器 > 标签选择器 > 通配符。
计算方式：ID=100，类=10，标签=1。

## display: none 与 visibility: hidden 区别？

• display: none：元素不渲染，不占空间。
• visibility: hidden：元素不可见，但仍占空间。

## inline / block / inline-block 的区别？

• inline：不换行，不支持宽高。
• block：独占一行，支持宽高。
• inline-block：不换行，但支持宽高。

## px / em / rem / vw/vh 的区别？

• px：绝对单位。
• em：相对父元素字体大小。适合需要与父元素保持比例关系的局部样式（如按钮内边距）‌
• rem：相对根元素字体大小。推荐用于移动端适配，通过动态调整根字体大小实现整体缩放 ‌
• vw/vh：相对视口宽高的百分比。

## 定位方式区别？

static： 默认值。没有定位
relative：相对自身定为，不脱离文档流。 只能配置 left 和 top
absolute：相对第一个有 relative 的父元素，脱离文档流。 都会生效
fixed：相对视口进行定位。
sticky：在一定范围内吸附。

## flex 常用属性？

• 容器：display: flex; justify-content; align-items; flex-direction; flex-wrap。
• 子项：flex-grow; flex-shrink; flex-basis; align-self。

## grid vs flex？

• flex：一维布局（行或列）。
• grid：二维布局（行+列）。

## BFC 是什么？

块级格式化上下文（Block Formatting Context）
bfc 页面上一个独立容器，容器里元素不会影响外面的元素
如何触发 bfc：
overflow：非 visible
position: absoute、fixed
display: inline、inlne-block
flot：非 none
将元素的 float 属性设置为 left 或 right（非 none）

作用：避免 margin 重叠，清除浮动，控制布局。

## 如何清除浮动？

触发 bfc
使用为元素

## 伪类 vs 伪元素？

• 伪类：表示状态（:hover, :first-child）。
• 伪元素：表示真实生成的元素 (::before, ::after)。

## animation vs transition？

• transition：过渡，需要触发（如 hover）。
• animation：关键帧动画，可自动循环。

## z-index 不生效的原因？

• 父元素没有定位。
• 受到层叠上下文影响。

## 盒子塌陷：

.parent::after {
content: "";
display: block;
clear: both;
}

# ================================================================================== 性能与优化=============================================

## 提高 CSS 性能的方法？

    • 减少层级嵌套。
    • 合理使用简短选择器。
    • 避免使用通配符 \*。
    • 复用样式，减少重复代码。

## 优化首屏加载时间
    懒加载，延迟加载非首屏内容
    代码分割，动态导入
    资源压缩合并 减少请求数量
    使用 cdn 加载静态资源

## 自适应

1. 淘宝无线适配，他是放 github 里有一个 js 文件，考下来引用就型，+ 布局单位使用 rem 单位即可
2. 原理就是： 监听窗口变化
3. let doc = document.documentElement.clientWidth/10;
   doc.style.fintSize = doc +'px'
   window.onresize= funvtion() {
   }

## 响应式

一个 url 可以多端适配
媒体查询
max-width / min-width
max-hight / min-height
@media only scree and (max-width){}
响应式图片
<source srcset='', media='(min-width: 1000px)'> </source>

# ================================================================================== 进阶与原理=============================================

17. CSS 变量 vs SASS/LESS 变量？
    • CSS 变量（–var）：运行时可变，支持 JS 修改。
    • SASS/LESS 变量：编译时确定，运行时不可变。

18. 层叠上下文是什么？
    决定元素 z-index 的局部环境。
    形成条件：position: fixed/absolute + z-index、opacity < 1、transform 等。

19. line-height 如何计算？
    • 默认：字体大小 × 1.2。
    • 如果设置数字，如 1.5，则等于 font-size × 1.5。
    • 如果设置百分比，则相对 font-size 计算。

20. margin 为什么会塌陷？
    • 垂直方向相邻块级元素 margin 会重叠。
    • 解决：父元素触发 BFC，或设置 padding/border。

## 什么是 css resetcss

重置我们元素的样式
resetcss
normalize.css 一个 css 重置样式库

## 如何实现产出文字省略

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

## 使用 css 画一个三角形

.triangle {
width: 0;
height: 0;
border-left: 50px solid transparent;
border-right: 50px solid transparent;
border-bottom: 100px solid red; /_ 朝下的三角形 _/
}

## 盒子水平垂直居中方法？

**flex**
display: flex;
justify-content: center;
align-items: center;
**absolute**
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
**grid**
display: grid;
place-items: center;
