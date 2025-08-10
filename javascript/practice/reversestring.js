function reve(name){
    let revee='';
    for(let i=name.length-1;i>=0;i--)
    {
       revee+=name[i]
    }
    return revee;
}
let r=(name)=> name.split('').reverse().join('');
console.log(r("Hello"))
console.log(reve("Paresh"))