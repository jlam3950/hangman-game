//Write a function that prints a multiplication table of up to 10 for a given number

//3 x 1 = 3
//3 x 2 = 6
//3 x 3 = 9
//...
//3 x 10 = 30

//Whatever the number we want the multiplication table to be printed, will be received
//in the parameter b
function printMultiplicationTable(b){
    console.log(`Multiplication Table for ${b}`);
    //Since the requirement is to print the table up 10, have the for loop start from 1 to 10, incremented by 1
    for(let a = 1;a<=10;a++){
        console.log(`${b} X ${a} = ${b*a}`);
    }
}

printMultiplicationTable(3);//Call the function to print the table for 3