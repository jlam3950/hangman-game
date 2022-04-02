


let array = [[1,3,4],[4,1,15],[-10,2,1]];
       

function checkdiagonal(array){
    let diagonal = array[0][0];
    let ans= true;
    for(let i=1; i<array.length;i++){
        if (array[i][i]!=diagonal)
        {
            ans = false;
            break;
        }
    }
    return ans;
}
console.log(checkdiagonal(array));