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


let viewMovment = document.getElementsByClassName('carrouselTrack');

function leftClick(){
    console.log('teste')
    
};