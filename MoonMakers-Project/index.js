// index.js
// 1) audio toggle for preview
// 2) very small manual carousel for gallery preview

document.addEventListener("DOMContentLoaded", function(){
    // ---------- audio toggle ----------
    const btn = document.getElementById("play-btn");
    const audio = new Audio("Assets/music/preview.mp3");
    let isPlaying = false;

    btn.addEventListener("click", function(){
        if(!isPlaying){
            audio.play();
            btn.textContent = "Pause Music";
            isPlaying = true;
        } else {
            audio.pause();
            btn.textContent = "Play Preview Music";
            isPlaying = false;
        }
    });

    audio.addEventListener("ended", function(){
        btn.textContent = "Play Preview Music";
        isPlaying = false;
    });

    // ---------- simple carousel ----------
const images = [
    "Assets/images/gallery1.jpg",
    "Assets/images/gallery2.jpg",
    "Assets/images/gallery3.jpg",
    "Assets/images/gallery4.jpg",
    "Assets/images/gallery5.jpg"
];

let current = 0;
const imgEl = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateCarousel(){
    imgEl.src = images[current];
}

prevBtn.addEventListener("click", function(){
    current--;
    if(current < 0) current = images.length - 1;
    updateCarousel();
});

nextBtn.addEventListener("click", function(){
    current++;
    if(current >= images.length) current = 0;
    updateCarousel();
});

// Set initial image
updateCarousel();

});
