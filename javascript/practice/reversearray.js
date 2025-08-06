function reversear(arr){
    let revarr=[];
    for(let i=arr.length-1;i>=0;i--)
    {
         revarr.push(arr[i])
    }
    console.log(revarr)
}
let arr=[1,2,3,4]
reversear(arr)