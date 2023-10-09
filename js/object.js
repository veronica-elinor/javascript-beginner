// Object
const card = {
    name: 'Ann',
    address: 'Taiwan',
    age: 25,
}

console.log('名字', card.name) // . 大概等於中文的"的"

const post = {
    image: 'https://xx.img.com/a1.png',
    desc: 'This is a picture',
    date: '2022/02/02',
    comment: ['好漂亮', '我也要去']
}

const post2 = {
    image: 'https://xx.img.com/a2.png',
    desc: 'This is a picture',
    date: '2022/02/03',
    comment: ['好漂亮', '我也要去']
}

const wall = [
    post,
    post2,
]

console.log('wall', wall)