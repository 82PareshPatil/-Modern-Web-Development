function plaindrom(str)
{
    const reve=str.split('').reverse().join('');
    if(str===reve)
    {
        return "It is";
    }
    else{
        return "it not"
    }
}
plaindrom("Paresh")