// 5.WAP to find out if 1st January will be a Sunday between 2000 and 2030

// code:

for(var i=2000;i<2031;i++){
    var date=new Date(i,0,1,1,1,1,1);
    var day=date.getDay();
    if(day==0)
    console.log(i);
}
