function dup(arr)
{
  const ch=[...new Set (arr)];
   console.log(ch)
}
arr=[1,2,2,3,4,4]
dup(arr);