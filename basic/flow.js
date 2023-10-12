//let condition = 100 > 50
//console.log('condition', condition)

// Flow Control
// if ... else ...
if (100 > 50) {
    console.log('確實大於50')
}
else {
    console.log('錯誤')
}

let score = 100
// let condition = score === 100 // === 相等 !== 不相等
console.log('condition', condition)

const posts = [ // 用let也可以
    {
        name: 'Ann',
        desc: '貼文一'
    },
    {
        name: 'Gina',
        desc: '貼文二'
    }
]

for (let i = 0; i < posts.length; i++) {
    if (i === 0) {
        let post = posts[i]
        console.log(post) // 秀出指定貼文
    }
}

// while條件觸發前都不會停止
// 注意不要寫成無窮迴圈
let condition = true
let target = 10
let i = 0

while (condition) {
    if (i === target) {
        console = false
    }
    console.log(i)
    i++
}
