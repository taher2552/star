// // function first(a){


// //     return function second(b){
        
// //         return function third(c){
// //             return a+b+c;
// //         }
      
// //     }
// // }

// // console.log(first(5)(7)(12))


// let a={
//     name:"taher",
//     display:()=>{
//         setTimeout(()=>{
//             console.log(this.name)
//         },0)
//     }
// }

// a.display();


let a="aircampus";
let b=a.split('');

console.log(a)

let d=b.reduce((pre,curr)=>{
   return pre.toUpperCase().concat(curr.toUpperCase());
})

console.log(d)





