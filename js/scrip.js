let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
const autoChangeSlide = () => {
    plusSlides(1);
}
setInterval(autoChangeSlide, 10000); 
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// menu 


// search

function toggleDiv() {
    var div = document.getElementById("show-search");
    div.style.display = div.style.display === "none" ? "flex" : "none";
}
  
function hideDiv() {
    var div = document.getElementById("show-search");
    div.style.display = "none";
}

// submit none

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Ngăn chặn hành động mặc định khi nhấn phím Enter
        document.getElementById("submitBtn").click(); // Kích hoạt sự kiện click của input submit ẩn
    }
});

// 

