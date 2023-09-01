/*Mobile nav button______________________________________________________________________*/
const mobileBtn = document.getElementById('atxgd_mobile-burger');
const navMenu = document.getElementsByClassName('atxgd_nav-menu')[0];
const computedMenuStyle = window.getComputedStyle(navMenu);

mobileBtn.addEventListener('click', ()=>{
    (computedMenuStyle.getPropertyValue('visibility') === 'hidden') ? navMenu.style.visibility = 'visible' : navMenu.style.visibility = 'hidden';
});

/*Carousel_______________________________________________________________________________*/
const carouselTrack = document.getElementsByClassName('atxgd_carousel-images')[0];
const slides = Array.from(carouselTrack.children);
const btnLeft = document.getElementsByClassName('atxgd_carousel-btnleft')[0];
const btnRight = document.getElementsByClassName('atxgd_carousel-btnright')[0];
const indicatorsContainer = document.getElementsByClassName('atxgd_carousel-nav-btns')[0];
const indicators = Array.from(indicatorsContainer.children);

const moveCarousel = (container, index) => {
    container.style.transform = `translateX(${index * -100}%)`;
};

const updateActiveSlide = (oldSlide, newSlide) => {
    oldSlide.classList.remove('current-position');
    newSlide.classList.add('current-position');
};

const updateActiveIndicator = (oldIndicator, newIndicator) => {
    oldIndicator.classList.remove('current-position');
    newIndicator.classList.add('current-position');
};

const slideIndex = (srcArray) => {
    return srcArray.findIndex(slide => slide.classList.contains('current-position'));
};

btnRight.addEventListener('click', ()=>{
    let indexOld = slideIndex(slides);
    
    //cannot check if slides[index].nextElementSibling is valid because last image this will be null
    (indexOld < slides.length-1) ? updateActiveSlide(slides[indexOld], slides[indexOld].nextElementSibling) : updateActiveSlide(slides[indexOld], slides[0]);
    let indexNew = slideIndex(slides);

    moveCarousel(carouselTrack, indexNew);
    updateActiveIndicator(indicators[indexOld], indicators[indexNew]);
});

btnLeft.addEventListener('click', ()=>{
    let indexOld = slideIndex(slides);
    
    //can check previouselementsibling here as you'll still be allowed to get to 0
    (slides[indexOld].previousElementSibling) ? updateActiveSlide(slides[indexOld], slides[indexOld].previousElementSibling) : updateActiveSlide(slides[indexOld], slides[slides.length-1]);
    let indexNew = slideIndex(slides);

    moveCarousel(carouselTrack, indexNew);
    updateActiveIndicator(indicators[indexOld], indicators[indexNew]);
});
indicatorsContainer.addEventListener('click', (e)=>{
    const target = e.target.closest('button');
    if(target){
        const currentIndicator = indicatorsContainer.querySelector('.current-position');
        if(target !== currentIndicator) {
            const oldSlideIndex = slideIndex(slides);
            const index = indicators.findIndex(indicator => indicator === target);
            updateActiveSlide(slides[oldSlideIndex], slides[index]);
            moveCarousel(carouselTrack, index);
            updateActiveIndicator(currentIndicator, indicators[index]);
        }
    }
});

