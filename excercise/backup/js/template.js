var myhtml = `<li>111</li>
            <li>222</li>
            <li>333 ${str}</li>`
var myname = "kerwin"
var str=`my name is ${myname} ${10+20} ${10>20?'aaa':'bbb'}`
document.write(myhtml)
document.write(str)
document.write(myhtml)


var arr = ['xiaoming', 'kerwin', 'tiechui']
var arr2 = arr.map(function(item){
    return `<li>${item}</li>`
})

console.log(arr2)
document.write(arr2.join(''))