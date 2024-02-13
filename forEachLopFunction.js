// let arr=["pune","delhi","mumbai"];
// arr.forEach((val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
// });
  
//mapp function
// let nums=[67,52,39];
// console.log(nums)
// let newArr=nums.map((val) => {
//      return val*2;
// });
// console.log(newArr);

//arry function
// let arr=[1,2,3,4,5,6,7,8];

// let evenArr=arr.filter((val) => {
//      return val % 2===0;
// });
// console.log(evenArr);

//Reduce Function
// let arr =[1,2,3,4];
//  const output=arr.reduce((prev,curr) =>{
//      return prev>curr ? prev:curr;
//  });
//  console.log(output); //10

//  //find largest number 
//  let arr2 = [1,5,3,6,7,2];
//  const output2=arr2.redcuce((prev,curr) =>{
//      return prev + curr;
//  });
//  console.log(output);

// practice question
let n = prompt("enter a number:");
let arr=[];
for(let i=1; i<=n;i++){
     arr[i-1]=i;
}
console.log(arr);

 let sum=arr.reduce((res,curr) =>
 {
     return res * curr;
 })
 console.log(sum);