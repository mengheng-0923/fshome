# promise 的状态有那些
pedding 进行中、fullfilled成功、rejected失败
# promise 的主要方法
promise.then() 上一个回调的结果回作为下一个回调的入参
promise.catch() 捕获then链条中的错误
promise.finally()无论失败还是成功都会执行
# promise 有哪些特性
promise.then()的链式调用，上一个promise 的返回值可以作为下一个promise的入参
promise.all 并发请求
promise.race  请求竞速
Promise.finally 最终处理
promise.allSettled([]) 不中断处理
# Promise.all()和Promise.race()有什么区别  
promise.all 所有的成功以后返回一个数组，任何一个失败就会终止
promise.race 取最先完成的promise结果，也可以做请求超时控制
# Promise和async/awit的区别
promise: 适用于简单的异步交互，或者组合多个peomise场景例如 promise.all
async: 底层依赖promise，await返回的都是promise，
       适合复杂的异步逻辑，尤其是需要进行顺序执行的代码

promise.then
promise.catch
promise.race
promise.finally
promise.all([]).then(()=>{

})

