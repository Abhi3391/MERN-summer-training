// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors


function string() {

    var st=prompt();
    st+=' ';
     var str="",fullstr="";

    for(var i=0;i<st.length;i++){

        var ch=st[i];

        if(ch!==" "){
           str+=ch;
        }
        else {
            str=str.toLowerCase();
            
            var w=str.charAt(0).toUpperCase();
            str=w+str.slice(1);
            fullstr+=str;
            fullstr+=" ";
            str="";
        }
    }
    console.log("string= "+st);
    console.log("output= "+fullstr);
    
}
