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
    container.style.left = `${index * -100}%`;
};

const updateActiveSlide = (oldSlide, newSlide) => {
    oldSlide.classList.remove('current-position');
    newSlide.classList.add('current-position');
};

const updateActiveIndicator = (oldIndicator, newIndicator) => {
    oldIndicator.classList.remove('current-position');
    newIndicator.classList.add('current-position');
};

btnRight.addEventListener('click', ()=>{
    let indexOld = slides.findIndex(slide => slide.classList.contains('current-position'));
    
    //cannot check if slides[index].nextElementSibling is valid because last image this will be null
    (indexOld < slides.length-1) ? updateActiveSlide(slides[indexOld], slides[indexOld].nextElementSibling) : updateActiveSlide(slides[indexOld], slides[0]);
    let indexNew = slides.findIndex(slide => slide.classList.contains('current-position'));

    moveCarousel(carouselTrack, indexNew);
    updateActiveIndicator(indicators[indexOld], indicators[indexNew]);
});
btnLeft.addEventListener('click', ()=>{
    let indexOld = slides.findIndex(slide => slide.classList.contains('current-position'));
    
    //can check previouselementsibling here as you'll still be allowed to get to 0
    (slides[indexOld].previousElementSibling) ? updateActiveSlide(slides[indexOld], slides[indexOld].previousElementSibling) : updateActiveSlide(slides[indexOld], slides[slides.length-1]);
    let indexNew = slides.findIndex(slide => slide.classList.contains('current-position'));

    moveCarousel(carouselTrack, indexNew);
    updateActiveIndicator(indicators[indexOld], indicators[indexNew]);
});
indicatorsContainer.addEventListener('click', (e)=>{

});

