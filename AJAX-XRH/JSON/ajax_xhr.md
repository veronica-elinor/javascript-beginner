# AJAX / XHR
#### 彭彭的課程
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