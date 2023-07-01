// 3.WAP to print area and perimeter of rectangle , taking input from the user , using prompt

// code:

function rectengle() {
    var l=parseInt(prompt("Enter the length"));
    var b=parseInt(prompt("Enter the breath"));

    var area=l*b;

    var perimeter =2*(l+b);
    
    console.log("Area is: "+area+" Perimeter is: "+perimeter);
}
