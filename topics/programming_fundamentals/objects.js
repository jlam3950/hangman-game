//Objects for the most part represent a real world entity. So, whatever the project you work on or the problem you try to 
//solve, you would create objects that represent what you are working on

//For example: Let's say you are working on a school system project. In school system,  you will be dealing with
//Students, Teachers, ClassRoom etc.,

// You will deal with a Class room object that would typically looks like this

//Object declaration
//Object definition go between the two curly brackets {}. Each property/attribute of the object
//will be double quoted and the corresponding value would be supplied after the :

let classRoom ={
    "subject":"Math",
    "schedule":"Monday",
    "roomNo":1235,
    "teacher":{ //Teacher is an object by itself so the data is defined between {}
       "name":"James",
       "gender":"Male"
    },
    "students":[ //Students is a collection data so we represent as Arrays which are denoted by []. Each element inside the Array represent a Student data
       {
          "id":123,
          "grade":"A",
          "age":20,
          "gpa":4.2
       },
       {
          "id":1233,
          "grade":"B",
          "age":30,
          "gpa":4.7
       },
       {
        "id":1233,
        "grade":"C",
        "age":30,
        "gpa":4.8
        }       
    ]
 }

//To access a spefic data from an object you can do it in two ways
console.log(classRoom.teacher.name);//Displays the name of the teacher
console.log(classRoom.teacher["name"])//Another way to display the name of the teacher

//Let's calculate the Average GPA in the class
//To calculate the average gpa, we need to first sum all the gpa of each student
//So we need to iterate/loop over each student in the students array

let sum = 0;
for(let a = 0;a<classRoom.students.length;a++){
     sum+= classRoom.students[a].gpa;//Grab the gpa of each student and add it to the variable sum
}
let avg = sum / classRoom.students.length;
console.log("Average GPA = "+avg);