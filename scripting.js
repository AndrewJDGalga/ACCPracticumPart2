const carouselTrack = document.getElementsByClassName('atxgd_carousel-images')[0];
const slides = Array.from(carouselTrack.children);
const btnLeft = document.getElementsByClassName('atxgd_carousel-btnleft')[0];
const btnRight = document.getElementsByClassName('atxgd_carousel-btnright')[0];
const indicatorsContainer = document.getElementsByClassName('atxgd_carousel-nav-btns')[0];
const indicators = Array.from(indicatorsContainer.children);

const initCarousel = () =>{
    carouselTrack.style.left = '0px';
};
initCarousel();

const moveCarousel = (container, index) => {
    console.log(index);
    container.style.left = `${index * -100}%`;
    console.log(container.style.left);
};

const updateActiveSlide = (oldSlide, newSlide) => {
    oldSlide.classList.remove('current-position');
    newSlide.classList.add('current-position');
};

const updateActiveIndicator = (oldIndicator, newIndicator) => {
    oldIndicator.classList.remove('current-position');
    newIndicator.classList.add('current-position');
};

/*
const moveCarousel = (container, directionX) => {
    const convertedPosition = parseFloat(container.style.left, 10);
    let newPositon = convertedPosition - 100 * directionX;

    if(newPositon > 0) {
        newPositon = (container.childElementCount-1) * -100;
    } else if(newPositon < ((container.childElementCount-1) * -100)) {
        newPositon = 0;
    }

    container.style.left = `${newPositon}%`;
};*/
//const moveCarousel = (container, pos) => {
    //const convertOriginalPos = parseFloat(container.style.left, 10);
    /*
    if(index < 0){
        index = 0;
    }else if(index > container.childElementCount-1){
        index = container.childElementCount-1;
    }*/
    //pos = pos * -1;
    //if(pos > 0){
    //    pos = container.childElementCount-1;
    //} //else if ()
    //console.log(container.childElementCount);
    //let newPositon = convertOriginalPos - 100 * index;
    //container.style.left = `${100 * pos}%`;
//};

btnRight.addEventListener('click', ()=>{
    let index = slides.findIndex(slide => slide.classList.contains('current-position'));
    
    //cannot check if slides[index].nextElementSibling is valid because last image this will be null
    (index < slides.length-1) ? updateActiveSlide(slides[index], slides[index].nextElementSibling) : updateActiveSlide(slides[index], slides[0]);
    index = slides.findIndex(slide => slide.classList.contains('current-position'));

    moveCarousel(carouselTrack, index);
});
btnLeft.addEventListener('click', ()=>{
    let index = slides.findIndex(slide => slide.classList.contains('current-position'));
    
    //can check previouslementsibling here as you'll still be allowed to get to 0
    (slides[index].previousElementSibling) ? updateActiveSlide(slides[index], slides[index].previousElementSibling) : updateActiveSlide(slides[index], slides[slides.length-1]);
    index = slides.findIndex(slide => slide.classList.contains('current-position'));

    moveCarousel(carouselTrack, index);
});
indicatorsContainer.addEventListener('click', (e)=>{
    /*
    const clickTarget = e.target.closest('button');
    if(clickTarget){
        const currentRadial = btnsSlidePosition.querySelector('.current-position');
        if(clickTarget !== currentRadial) {
            const targetIndex = slidePositions.findIndex(pos => pos === clickTarget);
            moveCarousel(carouselSlide, targetIndex);
        }
        //const currentRadial = slidePositions.findIndex(pos => pos === clickTarget);
    }*/
});

/*
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

});*/