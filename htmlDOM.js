// callback 回呼
// callback function 事件觸發後要回來呼叫這個function
// 每次是件觸發都匯往function裡面傳入一個event物件
window.addEventListener('load', function (params) { // 當網頁載入完成的監聽器
    //console.log('load')
    const p1 = document.getElementById('title') // 抓HTML元素的id
    console.log(p1)
    p1.innerText = "文字改變了" // 更改p標籤的文字
    const b1 = document.getElementById('btn')
    b1.addEventListener('click', function () {
        console.log('點下去')
    })

    const box1 = document.getElementById('box')
    box1.innerHTML = '<p>Test</p>' // 插入p標籤元素

    const in1 = document.getElementById('input1')
    in1.addEventListener('keyup', function (e) { // keyup 鍵盤按下去彈起來
        console.log('e.target.value', e.target.value) // 輸入的內容
    })
})