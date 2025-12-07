# 基础类型与语法
‌基本数据类型‌:number、string、boolean、null、undefined、symbol（ES6引入）为基本类型
特殊类型：any（绕过类型检查）、unknown（类型安全版any）、void（无返回值）、never（永不返回的函数）
# 类型定义与联合类型‌
使用 let age: number = 25 定义变量类型
联合类型通过 | 实现，如 function printId(id: number | string)
# 高级类型特性
1‌.接口(interface)与类型别名(type)‌
    接口定义对象结构，支持扩展； interface Person { name: string; age: number; }
    类型别名更灵活，可定义联合或交叉类型  type ID = number | string;
2.‌泛型‌
    提供代码复用性，如 function identity<T>(arg: T): T
3.约束泛型
    <T extends Lengthwise> 限制类型必须包含特定属性
# 核心概念对比
‌1.any vs unknown‌
    any 完全禁用类型检查；unknown 需类型断言或收窄后才可操作
    示例：
        let foo: any = 123;
        console.log(foo.msg); // 无错误
        let bar: unknown = 123;
        console.log(bar.msg); // 编译错误
2.‌元组与数组‌
    元组固定长度和类型顺序，如 [string, number]；
    数组仅约束元素类型
四、面向对象编程
‌类与修饰符‌
类支持 public、private、protected 修饰符
示例：