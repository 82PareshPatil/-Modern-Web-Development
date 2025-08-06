let arr =[1,2,3,4,5]
let k =2
k % arr.length;
let left=arr.slice(k).concat(arr.slice(0,k))
let right=arr.slice(-k).concat(arr.slice(0,-k))
console.log(left)
console.log(right)
