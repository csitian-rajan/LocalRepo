//  let heros=["ironman","hulk","thor","shaktiman","antman"];
//  //for loop
//   for(let i=0;i<heros.length;i++)
//   {
//      console.log(heros[i]);
//   }

// //for of loop
// for(let hero of heros){
//      console.log(hero.toUpperCase())
// }



//practice question
//  let marks=[85,97,44,37,76,60];
//  let sum=0;
// for(i=0;i<marks.length;i++)
// {
//     console.log("marks=",marks[i]);
//     sum=sum+marks[i]
// }
// console.log("total marks are=",sum);
// let avg=sum/marks.length;
// console.log("average=",avg) //avg=65.5


//practice quenstion 2
let items=[250,645,300,900,50];
for(i=0;i<items.length;i++)
{
    console.log(items[i])
    let offer=items[i]/10;
    items[i]=items[i]-offer
}

console.log(items)
