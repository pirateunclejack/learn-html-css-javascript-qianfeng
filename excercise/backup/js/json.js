var str = '{"name":"Kerwin", "age":100}'
var obj = JSON.parse(str)
console.log(obj.name, obj.age)

var obj1 = {"name":"zhangsan"}
var str1 = JSON.stringify(obj1)
console.log(obj1,str1)