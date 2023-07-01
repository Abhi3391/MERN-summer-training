// Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1

function sum() {
    var sume=0,sumo=0;

    var n=prompt();
    n='0'+n;
    

    for(var i=1;i<n.length;i++){
        if(i%2==0)
            sumo+=parseInt(n[i]);

        else 
            sume+=parseInt(n[i]);

    }
    console.log("Number is "+n);
    console.log("Even sum= "+sume+" Odd sum= "+sumo);
    
}

