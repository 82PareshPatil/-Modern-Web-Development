function Count(){
    let c=0;
    function chage(){
        c+=1;
        console.log(c);
      }

    return
    (
        <button onClick={change}>hi{c}</button>
    )
}
export {Count}