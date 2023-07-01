// 2.Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// code:

function date() {
    var m=new Date();
    var mm=m.getDate();
    return mm;
    
}

function mon() {
    var m=new Date();
    var mm=m.getMonth();
    return mm;
    
}


function year() {
    var m=new Date();
    var mm=m.getFullYear();
    return mm;
    
}

function dateformat(){

        console.log((mon()+1)+"/"+(date())+"/"+(year()));
}
