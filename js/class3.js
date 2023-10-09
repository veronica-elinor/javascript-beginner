// 以下寫法是相同的
// function Card(params) {}
// Card.pototype.hello = function (params) {}
// hello不存在於我們建立出來的物件，它存在於function內的prototype
// function被定義在class裡面，當它被建立的時候，它並不會出現在實體裡面，這樣可以減少記憶體負載
// 若今天有100個物件透過同一個class產生，這100個物件全都會指向同一個hello(函數)。因為只有一個hello(函數)，就可減少記憶體消耗
// 好處是當今天有100個物件透過這個class建立時，全部都會指向同一個function，可減少記憶體消耗

// 但若今天用this.hello的方式
// function Card(params) { this.hello = function name(params) {} }
// 這個this.hello每次被建立的時候都會建立一個實體在物件裡面
// 容易造成不必要的消耗

// 把this穩穩地綁定在這個物件上
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
a.hellooooo()