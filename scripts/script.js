function openMenu(){
    if (links.style.display == 'block'){
        links.style.display = 'none'
    }else{
        links.style.display = 'block'
    }
}

const track = document.querySelector('#carrouselTrack');
console.log(track)
const slides = Array.from(track.children)
console.log(slides)