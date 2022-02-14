let numbers = [1,3,5,7]; 
let reducer = function(current, total) {
    return current + total;
}
let sum = numbers.reduce(reducer, 0);
console.log(sum);

let random = [3,6,-1,100,32,-5,11,]
let maxReducer = function(current, largestSoFar) {
    if (current > largestSoFar) {
        return current;
    } else {
        return largestSoFar;
    }
}
let max = random.reduce(maxReducer, random[0]);
console.log('max=', max);

function myReduce(arr, reducer, initialValue) {
    let temp =  initialValue;
    for (let el of arr) {
       temp= reducer(el,temp);
    }
    return temp;
}