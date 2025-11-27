# ‌Webpack 核心功能 ‌

模块打包：将 JS、CSS 等资源视为模块进行依赖分析和打包
代码转换：通过 Loader 处理非 JS 文件（如 TypeScript、Sass）
扩展能力：通过 Plugin 实现压缩、代码分割等高级功能

# ‌ 四大核心配置项 ‌

entry: 入口文件路径
output: 输出路径和文件名
module.rules: Loader 配置规则
plugins: 插件实例数组

# ‌ 常见 Loader‌

babel-loader: 转换 ES6+语法
css-loader + style-loader: 处理 CSS 文件
url-loader: 将小文件转为 Base64

# ‌ 常用 Plugin‌

HtmlWebpackPlugin: 生成 HTML 并自动注入资源
SplitChunksPlugin: 代码分割优化
DefinePlugin: 定义编译期全局常量

# 性能优化

## ‌ 代码分割 ‌

动态导入：使用 import()语法实现按需加载
提取公共代码：通过 optimization.splitChunks 配置

## ‌Tree Shaking‌

删除未引用代码：需配合 ES6 模块化语法和 sideEffects 配置

## ‌ 缓存策略 ‌

文件名哈希：output.filename: '[name].[contenthash].js'

# 高级原理

## ‌ 热更新(HMR)机制 ‌

基于 WebSocket 通信，局部替换模块而非整页刷新
流程：文件改动 → 重新编译 → 推送更新 → 模块替换 ‌

## 构建流程 ‌

1. 初始化参数（合并配置）
2. 开始编译（创建 Compiler 对象）
3. 确定入口（解析依赖图）
4. 编译模块（调用 Loader）
5. 输出资源（生成 Chunk）
