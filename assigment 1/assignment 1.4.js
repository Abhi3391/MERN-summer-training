// 4.WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// input  = brainmentors

// output = sbrainmentor


// code:

function rev(st) {
    var l=st.length;
    var str = "";
    str += st[l-1];
    for(let i=0;i<st.length-1;i++) 
        str += st[i];

    console.log(str);
}

var st=prompt("Enter the string");
let i = 0;
while(i<5) {
    const timeout = setTimeout(rev(st), 2000);
    
}
