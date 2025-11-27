# 了解redux吗？
1.是一个应用数据流框架
2.采用集中式管理
3.三个核心方法：action、store、reducer
4.工作流程：view调用store的dispatch接收action传入store
            reduce处理state
            view通过store提供的getState获取最新state更新view
# redux有什么优缺点
优点：‌
    适用于大型应用‌：集中式状态管理便于跨组件共享数据，适合复杂场景；
    易于调试与测试‌：纯函数的特性使得状态变化可追溯
    单一数据源‌：全局状态存储在单一Store中
    状态只读‌：仅通过dispatch actions修改状态
    不可变数据‌：Reducer必须返回新状态对象而非修改原状态
缺点： 
    样板代码繁琐‌：需手动编写actions、reducers等，增加开发复杂度
‌    学习成本高‌：概念抽象（如不可变性、纯函数），新手需时间适应
‌    过度设计风险‌：小型项目使用可能导致不必要的代码膨胀
# 怎么理解redux的store
全局的状态树，集中存储整个应用的状态
组件可以通过useSelector() 获取某一个数据 
特点: 来源单一、只读、使用reduce纯函数来处理状态变化
# 怎么理解reduce
是一个纯函数，接受两个参数state，action,不修改原来的state，返回一个最新的state
# redux 的主要核心方法
createStore  创建store
store.dispatch({type:'',data:[]}) //派发行为 
store.getState() // 获取store的数据
reduxjs/toolkit:
createSlice({
    name
    initialState
    reducers:{
        add,
        min,
        contcat
    }
}) // 你的代码片段
configureStore 需要引入configureStore
export default configureStore({
    reducer: {
        info: infos.reducer
    }
}); 
# redux中调用接口怎么操作
使用异步操作thunk进行，从reduxjs/toolkit中引入createAsyncThunk，
createAsyncThunk自动生成pending/fulfilled/rejected三种action类型
他的返回值会直接给到action.payload。
通过extraReducers禁停请求的状态变化做处理
extraReducers: (then) => {
    then
      .addCase(fetchInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }