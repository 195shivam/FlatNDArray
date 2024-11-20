const arr=[1,2,3,[4,5,[6,7,[8]],9],3,2,[1,2,3,[4,5,6],7,8],9]
const newArray=[];
function flattenArray(nestedArray,flatArray){
    for(let i=0; i<nestedArray.length; i++){
        if(Array.isArray(nestedArray[i])){
            
            flattenArray(nestedArray[i],flatArray)
        }
        else{
            flatArray.push(nestedArray[i])
        }
    }
}
flattenArray(arr,newArray)
console.log(newArray)