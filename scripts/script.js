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
const checkButtons = document.querySelector('#checkButtons').children
checkButtons[slideCount].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_checked</span>'

//setInterval(forwardArrow, 2500)


function forwardArrow(){
    if (slideCount != slides.length -1){
        slideCount ++
        root.style.setProperty('--slide', '-'+ slideCount+'00%')
        checkButtons[slideCount].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_checked</span>'
        checkButtons[slideCount - 1].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_unchecked</span>'        
    }else{
        slideCount = 0
        root.style.setProperty('--slide', '0%')
        checkButtons[slides.length - 1].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_unchecked</span>'
        checkButtons[slideCount].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_checked</span>'
    }

    checkButtons[slideCount].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_checked</span>'
}

function backArrow(){
    if (slideCount != 0){
        slideCount --
        root.style.setProperty('--slide', '-'+ slideCount+'00%')
        checkButtons[slideCount].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_checked</span>'
        checkButtons[slideCount + 1].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_unchecked</span>'    
    }else{
        slideCount = 4
        root.style.setProperty('--slide', '-400%')
        checkButtons[slideCount].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_checked</span>'
        checkButtons[0].innerHTML = '<span class="material-symbols-outlined buttonsHeight " onclick="">radio_button_unchecked</span>'
    }

}

