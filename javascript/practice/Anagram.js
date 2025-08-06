function anagram(str,str1)
{
    if(str.length!==str1.length) return false;
    let new1=str.split('').sort().join()
    let new2=str1.split('').sort().join()
    if(new1===new2)
    {
        return "it is"
    }
    else{
        return "it is not"
    }

}