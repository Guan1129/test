ES6:
    ECMAScript 是 JavaScript的标准
    ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

    1.语法提案的批准流程
        Stage 0 - Strawman（展示阶段）
        Stage 1 - Proposal（征求意见阶段）
        Stage 2 - Draft（草案阶段）
        Stage 3 - Candidate（候选人阶段）
        Stage 4 - Finished（定案阶段）
    2.Babel转码器
        ES6为什么经历这么久还不能所有人都用么？那是因为兼容性问题！
        ES6的新特性目前还不能被所有浏览器兼容
        Babel把ES6的代码转码为ES5
        1.在项目的根目录下安装babel
            npm install --save-dev @babel/core
        2.创建.babelrc文件
            {
                "presets": [],
                "plugins": []
            }
        3.安装es6的官网转码规则
            npm install --save-dev @babel/preset-env
        4.在.babelrc文件中增加转码规则
            {
                "presets": [
                    "@babel/env"
                ],
                "plugins": []
            }
        5.命令行转码
            npm install --save-dev @babel/cli
        6.npx解释
            npm：node package manager
            npx：npx可以调用项目中安装的模块功能(http://www.ruanyifeng.com/blog/2019/02/npx.html)
        7.转码操作
            1.在控制台输出：npx babel es6demo.js
            2.转码结果写入一个文件：npx babel es6demo.js -o es5demo.js
            "use strict"; => 严格模式，严格模式下有一些内容是不能使用的或者改变使用规则
            3.整个目录转码：npx babel src -d lib
    3.ES6的新特性
        1.let和const命令
        2.解构赋值
        3.字符串的扩展
        4.字符串的新增方法
        5.数组的扩展
        6.对象的扩展
        7.对象的新增方法
        8.函数的扩展
        9.Promise对象    *
        10.Generator对象
        11.async/await   *
        12.Class关键字
        13.Extends关键字
        14.Module语法
        15.Proxy

    4.Promise和Async的区别
        1.都是为了处理异步的解决方案
        2.Promise的使用方式需要new关键字实现Promise对象
        3.Async是在函数上添加关键字 Async
        4.Generator的出现是为了代替到promise的麻烦程度
        5.Generator的本身使用同样也很麻烦,使用async，优化Generator，它就是 Generator 函数的语法糖
        
        React中的React-saga中使用了Generator对象
    
    