/**
 * 1. Set容器 : 无序不可重复的多个value的集合体
 *      ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
        四个操作方法：
            add(value)：添加某个值，返回Set结构本身。
            delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
            has(value)：返回一个布尔值，表示该值是否为Set的成员。
            clear()：清除所有成员，没有返回值
            size 长度
        set内部的元素可以遍历for...of...

2. Map容器 : 无序的 key不重复的多个key-value的集合体
  * Map()
  * Map(array)
  * set(key, value)//添加
  * get(key)
  * delete(key)
  * has(key)
  * clear()
  * size
 */

//1.set 
var set=new Set();
//添加元素
set.add(1)
set.add(2)
set.add('hello')

//删除
set.delete(1);
// console.log(set.has(2));
// console.log(set);

//2.set 添加数据 add()  或者是遍历arr.forEach(  {  set.add()}) 
//直接给set写数组
// var arr=[10,20,30,40,50]
// var set2=new Set(arr);//Set([1,2,3])
// console.log(set2);//{10, 20, 30, 40, 50}


//用途：数组去重
var arr=[10,20,30,40,30,20,10];
console.log(arr);

var set2=new Set(arr);
//写法一：去重后数据--数组
//遍历set2  赋值给arr2内容

//写法二: 扩展运算符 ... 
var arr2=[...set2];
console.log(arr2);



//一句话实现：数组去重
var arr3=[...new Set(arr)];
console.log(arr3);


//===========================================================
//2.map 
var m=new Map();
m.set('key','value')
m.set('uname','admin')

//Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应
var o={p:'hello world'};
m.set(o,'神器的操作');
console.log(m);

//获取使用方法 get(key)
// console.log(m.uname);//undefined
console.log(m.get('uname'));
console.log(m.get(o));












 

