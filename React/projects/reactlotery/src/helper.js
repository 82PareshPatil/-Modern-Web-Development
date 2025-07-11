
function ran(n){
   let arr=new Array();
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random() * 10)
    }
    return arr
}

function sum(arr){
 return   arr.reduce((sum,val)=>sum+val,0)
}
export {ran,sum}