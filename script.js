let nextDom = document.getElementById('next');
let prevDome = document.getElementById('prev');
let carouselDom = document.querySelector(".carousel");
let lisItemDom = document.querySelector(".carousel .lists");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function(){
    showSlider('next');
}
prevDome.onclick = function(){
    showSlider('prev');
}
let timeRunning = 1500;
let runTimeout;
function showSlider(type){
    let itemSlider= document.querySelectorAll(".carousel .lists .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if(type == 'next'){
        lisItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        lisItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)
}