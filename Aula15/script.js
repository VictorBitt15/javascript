let num = []
num.push(1)
num.sort()
console.log(`Nosso vetor é ${num}`) 

for (var x  = 0; x < num.length; x ++){
    console.log(num[x]);
}
for(let x in num){
    console.log(x);
}