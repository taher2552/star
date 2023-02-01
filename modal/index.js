
// let url=`https://jsonplaceholder.typicode.com/users/`;

// const fetchPromise = fetch(url);
 
// fetchPromise.then((res)=>{
//  return res.json()
// }).then((data)=>{
//   console.log(data);
//  })
// let a= new Promise((res,rej)=>{
//   let b= fetch(url);
//   let c=b.json();

//   if(c){
//     res(c)
//   }
//   else{
//     rej()
//   }
// })

// a.then((res)=>{
//   console.log(res)
// }).catch(()=>{
//   console.log("errr")
// })

// async function fetchData(){
//     let result= await fetch(url);
//     let final = await result.json();

//     return final;
// }

// async function show(){
//     let data= await fetchData();
//     // console.log(data);
//      console.log(data[0].id);

// }

// show();

// const signUp = document.querySelector('#sign_up');
// const form = document.querySelector('#form');

// signUp.addEventListener('click', ()=>{

//     console.log("hello")
//   form.style.display="flex";
// })


// add();

// (function greet(){
//   console.log("hello")
// })();

// function add(){
//   console.log("this is add function")
// }

// let promise1=new Promise((resolve,reject)=>{
//   console.log(1);
//   resolve('resolve');


// })

// let promise2=new Promise(()=>{
//   promise1.then((res)=>{
//     console.log(res)
//   })
// })

// console.log('Promise 1: '+promise1)
// console.log('Promise 2: '+promise2)


// const star=document.querySelectorAll('.fa');

// console.log(star)

// star.forEach((val,index)=>{
//   val.addEventListener('mouseover',()=>{
//     val.style.color="yellow"
//   })
// })

// star.map((val)=>{
//   val.addEventListner('click',()=>{
//     console.log('hello')
//   })
// })

// let sumWith1000 = function(){
//   let bag = {}
  
  
//     return function(num){
//       if(num in bag){
//         console.log('bag')
//       return bag[num]
//     }else{
//       console.log('Pehle baar')
//       bag[num] = num +1000;
//       return bag[num]
//     }
//     }
//   }
  
//    let aa = sumWith1000()
  
//   console.log(aa(50))
//   console.log(aa(50))
//   // console.log(aa(50))
//   // console.log(aa(50))
//   // console.log(aa(50))

var x=21;

function test(){
  // var x;
  console.log(x);
  // x=33
}



test()

abc();

var abc=()=>{
  console.log('a gello')
}
abc();

function abc(){
  console.log("hllo")
}