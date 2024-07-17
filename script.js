const  wapper = document.querySelector('.wapper');
const  loginLink = document.querySelector('.login-link');
const  registerLink = document.querySelector('.register-link');
const  btnPopup = document.querySelector('.btnlogin-popup');
const  iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wapper.classList.add('active');

});
loginLink.addEventListener('click', ()=> {
    wapper.classList.remove('active');
    
});
btnPopup.addEventListener('click', ()=> {
    wapper.classList.add('active-popup');

});
iconClose.addEventListener('click', ()=> {
    wapper.classList.remove('active-popup');

});

