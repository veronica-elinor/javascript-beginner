# javascript-beginner
> Programming with Mosh
<https://www.youtube.com/watch?v=W6NZfCO5SIk>

## Introduction to JavaScript
### What can JavaScript do?
- Web/ Mobile Apps
- Real-time Networking Apps
- Command-line Tools
- Games

### Where does JavaScript run?
> Originally designed to run in **BROWSERS**
##### (v.s php run on server)
##### JavaScript Engine
- Firefox: Spider Monkey
- Chrome: V8
> In 2009, Ryan Dahl took the open-source JavaScript engine in CHrome and embbedded it inside a C++ program. He called that program "Node".
> "Node" is a C++ program that includes Google V8. As a result of that, we can run JavaScript outside a browser. Thus we can build the backend for web/ mobile app in JavaScript.

### JavaScript v.s ECMAScript
- ECMAScript: A specification, defining standards
- JavaScript: A programming language

### Write JavaScript on Chrome
1. Open a new tab, click on right then choose "inspect"
2. Choose "console", and now you can write JavaScript code
3. You can change the JavaScript code in your HTML page, but it won't change the file.

### Best place to put JavaScript code is ```html <body> ``` tag
### Separation of concerns: build a .js file 

# 基本語法
> 布魯斯前端
<https://www.youtube.com/watch?v=1pYtVwIAvhY&t=1647s>

### console.log()
> 在console中留下紀錄
> 顯示()的內容

### let [variable] = [value]
##### 宣告變數
> 除了用let，也可以用var宣告變數
> (let的出現是用來取代var的)

### const 常數
> 不可改

# JavaScript箭頭函式(Arrow Function)
> 彭彭的課程
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
# JavaScript Event Handling
> 彭彭的課程
<https://www.youtube.com/watch?v=7qjRxCPI7f8&list=PL-g0fdC5RMbqW54tWQPIVbhyl_Ky6a2VI&index=27>
## 常見的事件種類
- click 滑鼠點擊
- mouseover 滑鼠移入
- mouseout 滑鼠移出
- mousedown 滑鼠按住
- mouseup 滑鼠放開
# AJAX / XHR
> 彭彭的課程
<https://www.youtube.com/watch?v=6X8sDGFGRss>
## What's AJAX?
#### 利用JavaScript程式進行網路連線，近年JavaScript提供fetch函式來執行網路連線完成address技術
## 使用JavaScript內建fetch函式
```js
fetch(網址)then.(function(回應物件){
    console.log(回應物件);
});
```
#### 網址為要連線的網址，```then```指的是取得伺服器的回應

## 回應格式
#### 伺服器會給予不同格式的資料，接收回應後要做不同的處理
- 純文字的回應
  ##### 一堆字，無特殊格式
  ```js
  fetch(網址).then(function(response){
    return response.text();
  }).then(function(data){
    console.log(data); // 純文字資料
  });
  ```
  ##### ```text()```為將response解讀成純文字資料，data為解讀後的資料

- JSON格式的回應
  ##### JSON為JavaScript裡的物件陣列結構
  ```js
  fetch(網址).then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data); // JSON格式資料
  });
  ```
## 操作範例
> 見 </ajax_xhr.html>