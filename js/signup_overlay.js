const signupLink = document.querySelector('.open-signup');
const signupOverlay = document.getElementById('signup__overlay');

if (signupLink && signupOverlay) {
  signupLink.addEventListener("click", (event) => {
    event.preventDefault();
    signupOverlay.classList.add('active');
  });
  signupOverlay.addEventListener("click", (event) => {
    if (event.target === signupOverlay) {
      signupOverlay.classList.remove('active');
    }
  });
}
const switchToSignin = document.getElementById('switch-to-signin');
if (switchToSignin) {
  switchToSignin.addEventListener("click", (event) => {
    event.preventDefault();
    signupOverlay.classList.remove('active');
    document.getElementById('signin__overlay')?.classList.add('active');
  });
}
