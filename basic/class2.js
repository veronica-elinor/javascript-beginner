// js的this
// this取決於當下執行的環境是誰
class Card {
    constructor(initName) {
        this.name = initName
   }

   hello () {
       console.log("hello", this.name) // 用這種方式宣告的function其實是存在於function的prototype中
   }
}

const c1 = new Card("Ann")
console.log('c1', c1) // log裡面沒有這個function
c1.hello()

const a = { name: 'AA' }
a.hellooooo = c1.hello
a.hellooooo()
