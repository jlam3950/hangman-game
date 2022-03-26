// let a = 40;
// let b = 50;
// let c = a + b;
// console.log("Sum = " +c);


// function addNumber(a,b) {
//     let c = a + b;
//     console.log(c);
// }

// addNumber(5,6);
// addNumber(15,23);

// for (let a = 0; a<=15; a++){
//     if(a%2==0){
//         console.log(a);
//     }
// }





// function printMultiplicationTable() {
//     for(let b = 1; b<=10; b++){
//         console.log(`Table for ${b}`);
//         for(let a = 1; a<=10; a++) {
//             console.log(`${b} X ${a} = ${b*a}`);
        
//         }
//     }
// }

// printMultiplicationTable();


// //OBJECTS
// let classRoom = {
//     subject : "Math",
//     schedule : "Monday",
//     roomNo : 1235,
//     teacher : {
//         name : "James",
//         gender : "male"
//     },
//     student : [

//     ]
// }

// let a = 10;
// // console.log(classRoom);
// for (let a = 0; a<classRoom.students.length; a++){
//     console.log(classRoom.students[a].grade);
// }



// function printSomething(message) {
//     console.log(message);
// }

// //ANONYMOUS FUNCTION
// (function() {
//     console.log("I am anonymous");
// })();

// printSomething("Hello World");

// const p = function (message) {
//     console.log(message);
// }

// const a = p;

// const z = (message) => { //<-- ARROW ANONYMOUS FUNCTION
//     console.log(message);
// }
// p("Hello world");
// a("Welcome");
// z("Greetings");

// //CALLBACKS
// const sort = (callback) =>{
//     console.log("Items are sorted");
//     const l = ["Item 1", "Item 2"];
//     callback(l);
// }

// const printItems = (itemList) =>{
//     for (let a=0; a<itemList.length; a++){
//         console.log(itemList[a]);
//     }
// }

// sort(printItems);


// EX: GIVEN TWO ARRAYS A AND B  WRITE A FUNCTION TO RETURN AN ARRAY WHICH HAS THE SUM OF NUMBERS FROM ARRAYS A AND B 
//EXAMPLE A= [1,3,3,3]
//EXAMPLE B= [5,2,3,4]
//THEN THE FUNCTION SHOULD RETURN [6,5,6,7]

let a = [1,3,3,3];
let b = [5,2,3,4];
function results() {
    for (c=0; c<a.length; c++) {
        console.log(a(c)+b(c));
    }
}
console.log(results);

function addArrays(arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        newArray[i] = arr1[1] + arr2[i];
    }
    return newArray;
}

console.log(addArrays ([1,3,3,3], [5,2,3,4]));