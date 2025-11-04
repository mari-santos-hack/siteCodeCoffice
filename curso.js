



//let slideIndex = [0, 0];
/*function showSlide(containerIndex, n) {
    // Remove active class from all slides and dots
    
    const container = document.getElementById(`BLOCAO${containerIndex}`); 
    const slides = document.querySelectorAll(~`.container-slide${containerIndex} .slide`);
    slideIndex[containerIndex] += n ; 
    
    
    
    
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Reset to first slide if we reach the end

    if ( slideIndex[containerIndex]>= slides.length) {
        slideIndex[containerIndex] = 0;
    }
    if (slideIndex[containerIndex] < 0) {
        slideIndex[containerIndex] = slides.length - 1;
    }
   
    // Add active class to current slide and dot
    slides[slideIndex[containerIndex]].classList.add('active');
}

function direita(containerIndex) {
    showSlide(containerIndex, 1);
}

function esquerda(containerIndex) {
    showSlide(containerIndex, -1);
}
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < slideIndex.length; i++) {
        showSlide(i, 0); // Mostra o slide 0 de cada container
    }
});  










let slide = 0; 
const slides = document.querySelectorAll('.slide');
function showSlide(n) {
    // Remove active class from all slides and dots 
    
    slides.forEach(slide => slide.classList.remove('active'));
    
    slide = n; 
    // Reset to first slide if we reach the end

    if (slide >= slides.length) {
        slide = 0;
    }
    if (slide < 0) {
        slide = slides.length - 1;
    }
   
    // Add active class to current slide and dot
    slides[slide].classList.add('active');
}

function direita() {
    showSlide(slide + 1);
}

function esquerda() {
    showSlide(slide-1);
}
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0); 
});*/



let slideIn = [0, 0, 0, 0]; 

function showSlide(containerIndex, n) {
    // Remove active class from all slides and dots 
    const container = document.getElementById(`container-${containerIndex}`); 
    const slides = container.querySelectorAll('.slide');

    slides.forEach(slide => slide.classList.remove('active'));
    slideIn[containerIndex] += n ; 
    // Reset to first slide if we reach the end

    if (slideIn[containerIndex] >= slides.length) {
        slideIn[containerIndex] = 0;
    }
    if (slideIn[containerIndex] < 0) {
        slideIn[containerIndex] = slides.length - 1;
    }
   
    // Add active class to current slide and dot
    slides[slideIn[containerIndex]].classList.add('active');
}

function direita(containerIndex) {
    showSlide(containerIndex, 1);
}

function esquerda(containerIndex) {
    showSlide(containerIndex, -1);
}
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < slideIn.length; i++) {
        showSlide(i, 0); // Mostra o slide 0 de cada container
    }
});  


const sobre = document.querySelector('.Sobre');
sobre.addEventListener('click', function() {
 window.location.href = "sobre.html";
    
})



