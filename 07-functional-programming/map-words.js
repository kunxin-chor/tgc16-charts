let words =["apples", "fox", "seashells", "durians", "roger"];
let count = words.map(function(eachWord){
    return eachWord.length;
})
console.log(count);

let count2 = [];
for (let w of words) {
    count2.push(w.length);
}

function myCustomMap(data, f){
    let results=[];
    for (let d of data) {
        results.push(f(d));
    }
    return results;
}
let count3 = myCustomMap(words, function(w){
    return w.length;
})
console.log(count3);