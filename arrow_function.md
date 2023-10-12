# JavaScript箭頭函式(Arrow Function)
#### 彭彭的課程
<https://www.youtube.com/watch?v=GzrWyJkD3b8>
## What's an arrow function?
> 函式的一種變形
## The Core Of Function
- 函式本體
  #### block程式碼
- 參數
  ####
- 回傳值
  ####
## Arrow Function語法
> 省去function，用=>取代
## 普通function
1. ```js
    function [函數名稱] (param) {
        block
        .
        .
        .
        return 回傳值;
    };
    ```

2. ```js
    let [變數名稱] = function (param) {
        block
        .
        .
        .
        return 回傳值;
    };
## 箭頭函式基本語法
```js
let [函式名稱] = (param) => {
    block
    .
    .
    .
    return 回傳值;
};
```
### 簡化
> 前提: 函式本體只有回傳值敘述時
- 可簡化的箭頭函式
  ```js
  let 函式名稱 = (函式參數列表) => {
    return 回傳值;
  }
  ```
- 箭頭函式簡化語法
  ```js
  let 函式名稱 = (函式參數列表) => (回傳值)
  ```