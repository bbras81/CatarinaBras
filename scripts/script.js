function openMenu(){
    if (links.style.display == 'block'){
        links.style.display = 'none'
    }else{
        links.style.display = 'block'
    }
}

const track = document.querySelector('.container')
console.log(track)
const slides = Array.from(track.children)
console.log(slides)

const root = document.querySelector(':root')

let slideCount = 0


function forwardArrow(){
    if (slideCount != slides.length -1){
        slideCount ++
        root.style.setProperty('--slide', '-'+ slideCount+'00%')
    }else{
        slideCount = 0
        root.style.setProperty('--slide', '0%')
    }
}

function backArrow(){
    if (slideCount != 0){
        slideCount --
        root.style.setProperty('--slide', '-'+ slideCount+'00%')
    }else{
        slideCount = 4
        root.style.setProperty('--slide', '-400%')
    }
}


