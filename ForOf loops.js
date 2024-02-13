//For of loop

// let size=0;
// let str="CSITIAN-RAJAN";
// for(let i of str)
// {
//     console.log("i=",i);
//     size++;
// }
// console.log("size is=",size)

//for in loop
let student ={
    name:"rajan kumar raut",
    age:30,
    cgpa:7.5,
    isPass:true,
};
for(let key in student)
{
    console.log("key=",key, "value=",student[key]);
}