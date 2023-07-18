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
let start = false

function forwardArrow(){
    if (start == false){
        slideCount = 0
        start = true
    }
    if (slideCount != slides.length -1){
        slideCount ++
        root.style.setProperty('--slide', '-'+ slideCount+'00%')
        console.log('IF',slideCount)
    }else{
        slideCount = 0
        root.style.setProperty('--slide', '0%')
        console.log('Else',slideCount)
    }
}

function backArrow(){
    console.log('Fora',slideCount)
    if (slideCount != 0){
        slideCount --
        root.style.setProperty('--slide', '-'+ slideCount+'00%')
        console.log('IF',slideCount)
    }else{
        slideCount = 4
        root.style.setProperty('--slide', '-400%')
        console.log('Else',slideCount)
    }
}


/*
document.addEventListener('DOMContentLoaded', function(){
    let slideCount = 1
    const rightArrow = document.querySelector('.arrowRight')
    const leftArrow = document.querySelector('.arrowLeft')
    
    rightArrow.addEventListener('click', function(){
        if (slideCount != slides.length){
            root.style.setProperty('--slide', '-'+ slideCount*100 +'%')
            slideCount ++
            console.log('IF',slideCount)
        }else{
            root.style.setProperty('--slide', '0%')
            slideCount = 1
            console.log('Else',slideCount)
        }
    })
    
    leftArrow.addEventListener('click', function() {
        slideCount -= 1
        root.style.setProperty('--slide', '-'+ slideCount*100 +'%')
        

    })
})
*/


/*



while (true){
    if (slideFoto != slides.length){
        (slideFoto += 1) * -100
        root.style.setProperty('--slide', '-100%')
    }else{
        slideFoto = 0
    }

}
function rightClick(){
    if (slideFoto != slides.length){
        root.style.setProperty('--slide', '-'+slideFoto*100+'%')
        slideFoto ++
    }else{
        root.style.setProperty('--slide', '0%')
        slideFoto = 1
    }
}
function leftClick(){
    //Quando clico no botao tenho que saber em que slide está 
    let position = root.style.getProperty('--slide')

};
console.log(slideFoto)
*/