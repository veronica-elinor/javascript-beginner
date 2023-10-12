// inheritage
class Car {
    constructor(initName) {
        this.name = initName
    }
    start() {
        console.log('車子發動')
    }
}

class Porshe extends Car {
    constructor(namePorshe) {
        super(namePorshe)
    }

    start2() {
        super.start() // 用super可以直接調用父類別的東西
        console.log('車子排氣')
    }

    // 就算沒有定義也可以直接拿父類別的function用
    start() {
        console.log('Porche車子發動') // override
    }
}

const p1 = new Porshe("我的保時捷")
p1.start()
console.log('name', p1.name)
