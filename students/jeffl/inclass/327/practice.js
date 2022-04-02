
// a = [1,2,3,4,5]
// b = [5,4,3,2,1]
// c = [1,2,3,4,5]
// const checkIfReverse = (arr1, arr2) => {
//   for(let i = 0; i < arr1.length; i++){
//     let checkArr2 = arr2.length - i - 1
//     if(arr1[i] != arr2[checkArr2]){
//       return false
//     }
//   }
//   return true
// }
// console.log(checkIfReverse(a, c))

// const loopArray = (arr) => {
//     for (let i = arr.length - 1 ; i >= 0; i--){
//         console.log(arr[i]);
//     }
// }

// loopArray([1,2,3]);

// if the number is odd add two to the number and console.log that number

// let odd = 0;

// const oddArray = (arr) => {
//     for (i = 0; i <= arr.length-1; i++){
//         if((arr[i] % 2) !== 0){
//             odd = (arr[i] + 2); 
//             console.log (odd);
//         } 
//     }
// }

// oddArray([1,2,3]);

// given two arrays
//    for each element in the first array add it to each element in the second array in reverse order and push to a new array
//    console.log the new array

// let newArray= [];

// const addReverseArray = (arr1,arr2) =>{
//     for (i = 0; i <= arr1.length - 1; i++){
//         let x = arr1.length - i -1; 
//         newArray = arr1[x] +arr2[i];
//         console.log(newArray);
//     }
// }

// addReverseArray([1,2,3],[1,2,3]); 


//Given two arrays check to see if the elements in the array are the same in the second array on the reverse.
//Example:
// a = [1,2,3,4,5] b = [5,4,3,2,1] => True
// a = [1,2,3,4,5] b = [1,2,3,4,5] => False

// const arrayCheck = (array1,array2) =>{
//     //If both arrays of different length, then false
//     if(array1.length!=array2.length){
//         console.log(false);
//         return;
//     }
//     let arrLength = array1.length;
//     let arr1Index=0;
//     let arr2Index=arrLength-1;
//     //Keep two indexes one to moveforward for the first array second to move backwards for the second array
//     while(arr1Index<=arrLength){
//         //as we move the arrays, check if each element are same. if not false and retur
//         if(array1[arr1Index]!=array2[arr2Index]){
//             console.log(false);
//             return;
//         }
//         //move indexes
//         arr1Index++;
//         arr2Index--;
//     }
//     //if the control reached at this point , then all the elements are equal which is true
//     console.log(true);
// }

// arrayCheck([1,2,3,4,5],[5,4,3,2,1]);

a = [1,2,3,4,5]
b = [5,4,3,2,1]
c = [1,2,3,4,5]

const checkIfReverse = (arr1, arr2) =>{
    for (let i = 0; i < arr1.length; i++){
        let secondArrayLength = arr2.length - 1 - i;
        if(arr1[i] !== arr2[secondArrayLength]){
            console.log("False");
            break;
        }
        return true;
    }
} 

console.log(checkIfReverse(a,c));