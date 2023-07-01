// Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long



function validatephone(){
    var n=prompt();
    console.log("number is: "+n);
    if((n.length)==10)
    {
        if(isNaN(n)){
            console.log("invalid");}
        else
        { console.log("valid");}
        
    }
    else{
        console.log("invalid");}
}
