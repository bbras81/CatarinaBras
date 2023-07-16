function openMenu(){
    if (links.style.display == 'block'){
        links.style.display = 'none'
    }else{
        links.style.display = 'block'
    }
}

const track = document.querySelector('.container');
console.log(track)
const slides = Array.from(track.children)
console.log(slides)
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth)


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);