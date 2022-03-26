//create a program to prepare food
//it needs to have functions 1) prepWork() 2) cook()
//prepWOrk would be a call back to ensure you did the prep work before cooking
//each function would just console.log message like "done prep work" and "cooking done"


const cook = (callback) => {
    setTimeout(function(){
    console.log("Cooking is complete!");
    }, 1000);
    callback();
}


const prepWork = () => {
    console.log("Prep work is done");
}

cook(prepWork);