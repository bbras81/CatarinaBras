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

const root = document.querySelector(':root')

function leftClick(){
    root.style.setProperty('--slide', '-100%')
};

function rightClick(){
    root.style.setProperty('--slide', '-200%')

}