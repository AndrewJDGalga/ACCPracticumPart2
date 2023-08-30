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

btnRight.addEventListener('click', ()=>{
    let index = slides.findIndex(slide => slide.classList.contains('current-position'));
    
    //cannot check if slides[index].nextElementSibling is valid because last image this will be null
    (index < slides.length-1) ? updateActiveSlide(slides[index], slides[index].nextElementSibling) : updateActiveSlide(slides[index], slides[0]);
    index = slides.findIndex(slide => slide.classList.contains('current-position'));

    moveCarousel(carouselTrack, index);
});
btnLeft.addEventListener('click', ()=>{
    let index = slides.findIndex(slide => slide.classList.contains('current-position'));
    
    //can check previouselementsibling here as you'll still be allowed to get to 0
    (slides[index].previousElementSibling) ? updateActiveSlide(slides[index], slides[index].previousElementSibling) : updateActiveSlide(slides[index], slides[slides.length-1]);
    index = slides.findIndex(slide => slide.classList.contains('current-position'));

    moveCarousel(carouselTrack, index);
});
indicatorsContainer.addEventListener('click', (e)=>{

});

