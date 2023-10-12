// js中的class只是語法糖
// 本質上與構造函數無異
class Card {
    constructor(initName) {
        this.name = initName
    }
}

const c1 = new Card("Ann")
console.log('c1', c1)
console.log(c1.name);
