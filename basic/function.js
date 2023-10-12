// 宣告函數 function [name] ()
// 無參數的函數 ()內為空
function hello () {
    console.log('hello')
}

// 執行函數
hello()

// 有參數的函數
function addMoney(price1, price2, discount) {
    console.log('price1', price1);
    console.log('price2', price2);
    console.log('discount', discount);
    console.log(price1 + price2 - discount)
}

// 結帳頁面
addMoney(2000, 100) // discount為undefined，導致運算結果為NaN(算不出來)

// 購物車頁面
addMoney(3000, 200, 50)

// 有回傳值的函數(return)
function addMoney(price1, price2, discount) {
    let result = price1 + price2 - discount
    
    let message = '普通會員'

    if (result >= 20000) {
        message = '白金會員'
        return message // return有離開迴圈的效果
    }

    if (result >= 50000) {
        message = '尊榮會員'
        return message
    }
    return message
}

let total = addMoney(5000, 5000, 1000)
console.log('total', total);

let message = addMoney(5000, 5000, 1000) // 與block內的變數名稱相同沒關係
console.log('message', message);

// 用變數將一個個物件宣告出來
//const card = {
//    name: "Ann"
//}

//const card2 = {
//    name: "Gina"
//}

//const card3 = {
//    name: "Jasmine"
//}

// 若有100個相同物件要宣告，以上方法顯得有點不切實際

// 構造函數 function [構造函數名稱] ()
function createCard(name) {
    this.cardName = name // js中this也代表正在執行的函數
    // this.name = name
}

// new 建立 構造
const a1 = new createCard('Ann')
console.log(al);

// 另外兩種宣告函數的方式
// 上面可以使用
function hello() {}

// 上面不可以使用
let hello = function () {}

// 還可以使用箭頭函數
// 箭頭函式還有解決其他問題
// 但若與那個問題無關基本上類似this
let hello = () => {}
