let num=5;
let pat='';
for(let i=0;i<=num;i++)
{
    for(let j=0;j<=num-i;j++)
    {
        pat+=" ";
    }
      for(let k=0;k<=i;k++)
    {
        pat+=k;
    }
       for(let l=i-1;l>=0;l--)
    {
        pat+=l;
    }
    pat+='\n'
}
console.log(pat)