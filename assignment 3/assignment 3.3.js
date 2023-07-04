// 3.Given two strings, return true if they are anagrams of one another

// For example: Mary is an anagram of Army
    

function check(st1,st2){
    var flag=0;
    if(st2.length==st1.length){
    for (var i=0;i<st1.length;i++){
        if(!st2.includes(st1[i]))
           {
            flag=1;
            break;}
    }}
    else
        flag=1;
    
    if(flag==1)
        console.log('no');
    else
        console.log('yes');

}

function anagrum(){
    var st1=prompt('enter string1');
    var st2=prompt('enter string2');
    st1=st1.toLowerCase();
    st1=st2.toLowerCase();
    check(st1,st2);
}

anagrum();
