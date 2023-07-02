// 2 . Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.


// Output:
// "true" if the triangle is equilateral and "false" if its not.
    
    
    function equilateral(a,b,c){
    if(a==b&& b==c){
        console.log( 'yes');
}
    else console.log('no');
}

function triangle(){
    var a=parseInt(prompt());
    var b=parseInt(prompt());
    var c=parseInt(prompt());

    equilateral(a,b,c);
}

triangle();
