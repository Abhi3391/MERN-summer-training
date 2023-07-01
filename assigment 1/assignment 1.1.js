// 1.Write a JavaScript program to display the current day and time in the following format.
// Today is : wednesday.
// Current time is : 10 PM : 30 : 38

// code:

function h() {
    const birthday = new Date();
const hours = birthday.getHours();
    return hours;
    
}

function m() {
    const birthday = new Date();
const min = birthday.getMinutes();
    return min;
    
}

function s() {
    const birthday = new Date();
const sec = birthday.getSeconds();
    return sec;
    
}


function time() {
    var dayname={1:"sunday",2:"monday",3:"tuesday",4:"wednesday",5:"thrusday",6:"friday",7:"saturday"};
    var dd=d();
    console.log("Today is :"+dayname[dd+1]);
    
    console.log("Current time is : "+h()+" "+(h()<12?"AM":"PM")+":"+m()+":"+s() );
    
}
