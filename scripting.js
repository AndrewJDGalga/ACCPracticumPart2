//Check out Kevin Powell on YouTube
const track = document.getElementsByClassName('atxgd_carousel-images')[0];
const images = Array.from(track.children);
const rightBtn = document.getElementsByClassName('atxgd_carousel-btnright')[0];
const leftBtn = document.getElementsByClassName('atxgd_carousel-btnleft')[0];
const navBar = document.getElementsByClassName('atxgd_carousel-nav-btns')[0];
const posIndicators = Array.from(navBar.children);
const imageWidth = images[0].getBoundingClientRect().width;

const setImagePositon = (image, index) => {
    image.style.left = `${imageWidth * index}px`;
};
images.forEach(setImagePositon);

const slideImage = (track, currentImage, newImage) => {
    track.style.transform = `translateX(-${newImage.style.left})`;
    currentImage.classList.remove('current-image');
    newImage.classList.add('current-image');
};

rightBtn.addEventListener('click', ()=>{
    slideImage(track, track.querySelector('.current-image'), track.querySelector('.current-image').nextElementSibling);
});
leftBtn.addEventListener('click', ()=>{

});
navBar.addEventListener('click', (e)=>{

});