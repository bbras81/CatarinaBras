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

const root = document.querySelector(':root');
var slide = 0
while(true){
    if (slide == slides.length){
        slide = 0;
        root.style.setProperty('--slide', `${slide}` + '%')
    }else{
        var move = slide * 100
        root.style.setProperty('--slide', `${move}` + '%')
    }
    slide ++;
}

function leftClick(){
    //Quando clico no botao tenho que saber em que slide está 

    root.style.setProperty('--slide', '-100%')
};

function rightClick(){
    root.style.setProperty('--slide', '-200%')

}