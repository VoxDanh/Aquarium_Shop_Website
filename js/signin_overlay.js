var signin_button=document.querySelector('.navbar-sign');
signin_button.addEventListener("click",()=>{
    document.getElementById('signinOverlay').classList.add('active');
})
const background_touch = document.getElementById('signinOverlay');
background_touch.addEventListener("click", (touch) => {
    if (touch.target === touch.currentTarget) {
  background_touch.classList.remove('active');
    }
});
