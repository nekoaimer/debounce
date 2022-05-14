## install

```
 npm i debounce-aimer
```

## import
``` js
const debounce = require('debounce-aimer')
```

## usage

- 具体使用可查看 examine 文件

``` js
/*
  三个参数
  参数一 需要执行的函数
  参数二 需要延迟的时间
  参数三 一个对象 有两个参数
    immediate: true 第一次立即执行
    callback 为一个函数
    如果没有传入callback，那么执行的函数的返回值就是Promise的返回值
    如果传入了callback函数并且有返回值，那么返回的Promise结果是callback的返回值。
*/
```