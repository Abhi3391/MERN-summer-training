// 15. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]

// output = maxno. : 15
// 			minno. : -1

arr = [10,3,15,-1,9,6];
var l=arr[0],s=[0];
for(var i=0;i<arr.length;i++)
  {
    if(l<arr[i])
      l=arr[i];
    if(s>arr[i])
      s=arr[i];
  }
console.log('largest nu is : '+l+'smallest number is : '+s);
