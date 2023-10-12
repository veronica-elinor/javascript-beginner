// 另一種綁定this的方式
// 將函數宣告成箭頭函數
class Card {
    constructor(initName) {
        this.name = initName
        // 綁定this在Card物件裡
        //this.hellooooo = this.hello.bind(this)
    }

    hello = () => { // 將hello綁定在這個物件上，而非宣告在prototype上面
        console.log("hello", this.name) // 用箭頭函式宣告，裡面的this永遠會跟著Card裡的this跑
    }
}

const c1 = new Card("Ann")
console.log('c1', c1) // log裡面沒有這個function
c1.hello()

const a = { name: 'AA' }
a.hellooooo = c1.hello
a.hellooooo()
