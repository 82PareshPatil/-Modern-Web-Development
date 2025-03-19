let list=[];


while(true)
{
    let ch=prompt("Enter Your choise: ");
    if(ch==4)
    {
        console.log("Exit from the list succesfull.")
        break;
    }
    else if(ch==1)
    {
        let t=prompt("Enter your task")
        list.push(t);
        console.log("Task succesfully add")
    }
    else if(ch==2)
    {
        let d=prompt("Enter index number you want to remove the task")
        list.splice(d,1);
        console.log("Element delete.")
    }
    else if(ch==3)
    {
        let k=0;
        console.log("------------------------------------------")
        for(i of list)
        {
            console.log(`${k}: ${i}`)
            k+=1;
           
        }
        console.log("------------------------------------------")

    }
    else{
        alert("Wrong choise.")
    }
}