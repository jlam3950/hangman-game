function isPrime(inputNumber){
    let flag=true;
    //For example Number 7 is prime because it cannot be divided by 2,3,4,5,6
    for(let a = 2;a<inputNumber;a++){
        if(inputNumber % a == 0){
            flag = false;
            break;
        }
    }
    return flag;
}

let a = [12,33,4,6,3,35,35]

let msg = "List has no prime";
for(let b = 0;b<a.length;b++){
    if(isPrime(a[b])){
        msg = "List has prime";
        break;
    }
}
console.log(msg);