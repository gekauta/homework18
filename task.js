const arr =[1,2,3,-1,-2,-3];
const arr1=[];
function y(arr){
    const exampleArr=[];
    arr.length==0 ? console.log("Массив пустой"): true;
    for (let i=0; i<arr.length; i++){
           arr[i]>0 ? exampleArr.push(arr[i]):true;
    }
    if (arr.length!==0) { return exampleArr}
    else { return null}
}
console.log(y(arr));

// console.log(arr.length);
// console.log(arr[6]);