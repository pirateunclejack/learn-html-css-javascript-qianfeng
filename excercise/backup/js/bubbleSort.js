var ageArr = [1,6,3,7,5,1,2,3,3,2,1]

for(i=0; i<ageArr.length-1; i++){
    minIndex = i
    for (j=i;j<ageArr.length-1;j++){
        if (ageArr[minIndex] > ageArr[j+1]){
            minIndex = j+1
        }
    }
    if (minIndex != i) {
        temp = ageArr[minIndex]
        ageArr[minIndex] = ageArr[i]
        ageArr[i] = temp
    }
}
ageArr.push(100)
console.log(ageArr)
ageArr.pop(100)
console.log(ageArr)
