
// let numbers = [4,6,12,45,13,77,20];
// function isPrime(numbers) {
//     for (let a = 0; a<numbers.length; a++) {
//         for (b = 2; b<numbers[a]; b++) {
//      if (numbers[a] % b > 0) {
//         return true;
//      } else if (numbers[a] % b === 0) {
//          return false; 
//             }
//         }
//     }
// } 

// isPrime(numbers);



function isPrime(inputNumber) {
    for (let a = 2; a<inputNumber; a++) {
        if (inputNumber % a === 0) {
            return false;
        }
    }
    return true;
}


let a = [12,33,4,6,5]

let msg = "List has no prime";
for (let b = 0; b<a.length; b++) {
   if(isPrime(a[b])) {
       msg = "List has prime";
       break;
   }
}


console.log(msg);

