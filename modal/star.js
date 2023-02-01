const star = document.querySelectorAll('.fa');


// let flag=false;

// star.forEach((st, idx)=>{

//  ["mouseover","mouseout","click"].forEach((el)=>{
//     st.addEventListener(el,()=>{
//         if(el=="click"){
//             for(let i=0; i<=idx;i++){
//                         console.log(i+" yellow "+idx)
//                         star[i].style.color="yellow"
//                     }
//                     for(let i=idx+1;i<star.length;i++){
//                         console.log(i+" black "+ idx)
//                         star[i].style.color="black";
//                     }
//                     return;
//         }
//         if(el=="mouseover"){
//                  for(let i=0; i<=idx;i++){
//             star[i].style.color="yellow";
          
//         }
    
//         }

//         else if(el=="mouseout"){
//             for(let i=0; i<=idx;i++){
//                 star[i].style.color="black"
//             }
//         }
//     })
//  })

 let flag=true;
star.forEach((st, idx)=>{

    ["click", "mouseover", "mouseout"].forEach((el)=>{
       st.addEventListener(el,()=>{
           if(el=="click"){
            flag=false;
               for(let i=0; i<=idx;i++){
                           console.log(i+" yellow "+idx)
                           star[i].style.color="yellow"
                       }
                       for(let i=idx+1;i<star.length;i++){
                           console.log(i+" black "+ idx)
                           star[i].style.color="black";
                       }
                       return;
           } 
           
           if(el=="mouseover"){
                        if(flag){
                             for(let i=0; i<=idx;i++){
                        star[i].style.color="yellow";
                      
                    }
                }
                    }

        else if(el=="mouseout"){
            if(flag){
            for(let i=0; i<=idx;i++){
                star[i].style.color="black"
            }
        }
     
    }


        })
    })
})


    // st.addEventListener('click', ()=>{
    //     for(let i=0; i<=idx;i++){
    //         console.log(i+" yellow "+idx)
    //         star[i].style.color="yellow"
    //     }
    //     for(let i=idx+1;i<star.length;i++){
    //         console.log(i+" black "+ idx)
    //         star[i].style.color="black"
    //     //     star[i].classList.remove('yellow');
    //     }
    // })

    // st.addEventListener('mouseover',()=>{
        
    //     for(let i=0; i<=idx;i++){
    //         console.log(i+" yellow "+idx)
    //         star[i].style.color="yellow"
    //     }
    // })

    // st.addEventListener('mouseout',()=>{
       
    //     for(let i=0; i<=idx;i++){
    //         star[i].style.color="black"
    //     }
  
    // })
// })