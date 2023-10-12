// this只要記以下原則
// 它的實體是誰?當下執行這個函數的人是誰?
// 那個人即為這個函數的this
// 當c1執行hello，c1即為this;當a執行hello，a即為this
// 當對this進行綁定，都會指向同一個this

// 把this穩穩地綁定在這個物件上
// 缺點: 會產生100百個物件
class Card {
    constructor(initName) {
        this.name = initName
        // this
        this.hellooooo = this.hello.bind(this) // 綁定this在Card物件裡
    }

    hello () {
        console.log("hello", this.name) // 用這種方式宣告的function其實是存在於function的prototype中
    }
}

const c1 = new Card("Ann")
console.log('c1', c1) // log裡面沒有這個function
c1.hellooooo()

const a = { name: 'AA' }
a.hellooooo = c1.hello
a.hellooooo() // 雖然a也有name但this已經永遠綁訂在Card底下
