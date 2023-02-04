let star=document.querySelectorAll('.fa');

let flag=true;

star.forEach((st, idx)=>{
    ["click", "mouseover", "mouseout"].forEach(el=>{
        st.addEventListener(el, ()=>{
            if(el=="click"){
                flag=false;
      
                for(let i=0; i<=idx;i++){
                  star[i].style.color="yellow";
                }
      
                for(let i=idx+1; i<star.length;i++){
                  star[i].style.color="black";
                }
              }

              else if(el=="mouseover"){
                if(flag){
                    for(let i=0; i<=idx;i++){
                        star[i].style.color="yellow";
                      }
                }
              }
              else if(el=="mouseout"){
                if(flag){
                    for(let i=0; i<=idx;i++){
                        star[i].style.color="black";
                      }
                    }
              }

        })

    })
})