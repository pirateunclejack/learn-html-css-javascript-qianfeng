var price = 123.45678
var sum = price.toFixed(2)-0+100
console.log(sum.toFixed(2))

console.log(Math.random())

console.log(Math.round(price))

console.log(Math.round(price+0.2))

console.log(Math.floor(price+0.2))

console.log(Math.abs(price+-10))

console.log(Math.sqrt(25))

console.log(Math.pow(2,3))

console.log(Math.max(1, 2, 3, 5, -10))
console.log(Math.min(1, 2, 3, 5, -10))

console.log(Math.PI.toFixed(100))


var res = Math.floor(Math.random()*10)
console.log(res)

var res = Math.floor(Math.random()*(11))
console.log(res)

var res = Math.floor(Math.random()*(10))+10
console.log(res)

var res = Math.floor(Math.random()*(11))+10
console.log(res)

function getRnd(min, max) {
    if(min>max){
        console.error("Wrong numbers")
        return
    }
    return Math.floor(Math.random()*(max-min+1)+min)
}

console.log(getRnd(10,20))