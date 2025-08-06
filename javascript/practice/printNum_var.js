var printnum;
for(var i=0;i<3;i++)
{
    if(i===2)
    {
        printnum =function()
        {
           console.log(i)
        }
    }
}
console.log(printnum())