/*Mobile nav button______________________________________________________________________*/
const mobileBtn = document.getElementById('atxgd_mobile-burger');
const navMenu = document.getElementsByClassName('atxgd_nav-menu')[0];
const computedMenuStyle = window.getComputedStyle(navMenu);

mobileBtn.addEventListener('click', ()=>{
    (computedMenuStyle.getPropertyValue('visibility') === 'hidden') ? navMenu.style.visibility = 'visible' : navMenu.style.visibility = 'hidden';
});