let numprint
for (let i=0;i<3;i++)
{
    if(i===2)
    {
        numprint= function(){
            return i;
        }
    }
}
console.log(numprint())