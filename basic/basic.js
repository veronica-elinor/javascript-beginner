// Logging sth on the console
console.log('Hello World');

// Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(2));

let myName = 'Ann' // string
console.log(myName)

// let score = 100 // number
// console.log(score)

let isFake = false //true false boolean
console.log(isFake)

let bag = undefined // the variable is empty. Same as null but not equal
console.log(bag)

let classA = ['Ann', 'Gina'] // array
console.log(classA)
classA.push('Jasmine') // 將新元素加入陣列的最後一項
console.log(classA)
console.log(classA.length) // 陣列長度

let igPhotos = [
    'https://xx.img.com/a1.png',
    'https://xx.img.com/a2.png',
    'https://xx.img.com/a3.png'
]

console.log('第1筆', igPhotos[0]) // index = 0
console.log('第2筆', igPhotos[1])
console.log('第3筆', igPhotos[2])
console.log('第4筆', igPhotos[4])
