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

const slideImages = (track, currentImage, newImage) => {
    track.style.transform = `translateX(-${newImage.style.left})`;
    currentImage.classList.remove('current-image');
    newImage.classList.add('current-image');
};

const updatePosIndicators = (currentIndicator, nextIndicator) =>{
    currentIndicator.classList.remove('current-position');
    nextIndicator.classList.add('current-position');
};

const updateImagesAndIndicators = (currentImage, newImage, currentIndicator, nextIndicator, arrayStartOrEnd) => {
    if(!newImage){
        //designed for the same number of images and indicators
        newImage = images[arrayStartOrEnd];
        nextIndicator = posIndicators[arrayStartOrEnd];
    }
    slideImages(track, currentImage, newImage);
    updatePosIndicators(currentIndicator, nextIndicator);
};

rightBtn.addEventListener('click', ()=>{
    updateImagesAndIndicators(track.querySelector('.current-image'), track.querySelector('.current-image').nextElementSibling, navBar.querySelector('.current-position'), navBar.querySelector('.current-position').nextElementSibling, 0);
});
leftBtn.addEventListener('click', ()=>{
    updateImagesAndIndicators(track.querySelector('.current-image'), track.querySelector('.current-image').previousElementSibling, navBar.querySelector('.current-position'), navBar.querySelector('.current-position').previousElementSibling, images.length -1);
});
navBar.addEventListener('click', (e)=>{

});