
// 1.Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
// 3==multiply, 4==divide ).Don`t use switch statement or if else statements
 
// 1.add,
// 2.subtract,
// 3.multiply,
// 4.divide 

// write the calc function for all the operations

function cal(x,y) {

    var  add=function(x,y) {
        return x+y;
    }
 var  sub=function(x,y) {
        return x-y;
    }
var  mul=function(x,y) {
        return x*y;
    }
var  div=function(x,y) {
        return x/y;
    }
    return {add,sub,mul,div};

}

function input(){
    var num1=parseInt(prompt('enter num1'));
    var num2=parseInt(prompt('enter num2'));
    var opr=parseInt(prompt('enter operator number'));

    var op={1:cal(num1,num2).add(num1,num2),2:cal(num1,num2).sub(num1,num2),3:cal(num1,num2).mul(num1,num2),4:cal(num1,num2).div(num1,num2)}

    // console.log(cal(num1,num2,op[opr]));
    // console.log(op[opr]);

    
     var ans=op[opr];
    console.log(ans);

}
input();
