const button = document.querySelector('.btn');
const signUp = document.querySelector('.sign_up');
const cross = document.querySelector('.cross');
const background = document.querySelector('.background');

button.addEventListener('click', ()=>{
     signUp.style.display="flex";
     background.style.display="block";
});

cross.addEventListener('click', ()=>{
     background.style.display="none";
});

window.onclick = function(e){
      if(e.target==background){
        background.style.display="none";
      }
}