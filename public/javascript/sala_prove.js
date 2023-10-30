let slideIndex = 1;
showSlidesRed(slideIndex);
showSlidesBlue(slideIndex);

function plusSlidesRed(n) {
    showSlidesRed(slideIndex += n);
}
function plusSlidesBlue(n) {
    showSlidesBlue(slideIndex += n);
}

function currentSlideRed(n) {
    showSlidesRed(slideIndex = n);
}
function currentSlideBlue(n) {
    showSlidesBlue(slideIndex = n);
}



function showSlidesRed(n) {
    let i;
    let slides = document.getElementsByClassName("redSlides");
    let dots = document.getElementsByClassName("demoR");
    let captionText = document.getElementById("captionRed");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlidesBlue(n) {
    let i;
    let slides2 = document.getElementsByClassName("blueSlides");
    let dots2 = document.getElementsByClassName("demoB");
    let captionText2 = document.getElementById("captionBlue");
    if (n > slides2.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex-1].style.display = "block";
    dots2[slideIndex-1].className += " active";
    captionText2.innerHTML = dots2[slideIndex-1].alt;
}