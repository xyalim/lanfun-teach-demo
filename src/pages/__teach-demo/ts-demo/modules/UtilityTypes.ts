// 更多工具类型
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// 常用的工具类型
/**
类型	用法
Partial<T>	将T 中所有的属性都变成可选类型
Required<T>	将T中所有的属性都变成必选类型
Readonly<T>	将T所有属性转为只读
Record<T, K>	返回属性名为类型K，值为T的对象类型
Pick<T, K>	将T类型中的K属性提取出来
Omit<T, K>	将T类型中的K属性剔除
Exclude<T, U>	从联合类型T中剔除可以赋值给类型U的部分
Extract<T, U>	提取联合类型T和联合类型U交集部分
NonNullable	过滤类型中的 null 及 undefined 类型
Parameters	获取函数的参数类型组成 元组
ReturnType	获取函数的返回类型
————————————————
版权声明：本文为CSDN博主「前端好好玩」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_32438227/article/details/125058423
 */
