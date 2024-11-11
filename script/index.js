function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("open");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Oculta todos os slides e remove a classe 'fade'
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");
    }

    // Remove a classe 'active' de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Exibe o slide atual com a animação de fade
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");
    dots[slideIndex - 1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlide2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide2");
    let dots = document.getElementsByClassName("dot2");

    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }

    // Oculta todos os slides e remove a classe 'fade2'
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");
    }

    // Remove a classe 'active2' de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }

    // Exibe o slide atual com a animação de fade
    slides[slideIndex2 - 1].style.display = "block";
    slides[slideIndex2 - 1].classList.add("fade");
    dots[slideIndex2 - 1].className += " active2";
}


setInterval(() => {plusSlide(1);}, 5000); 
setInterval(() => {plusSlide2(1);}, 5000); 


function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
    
    console.log("teste");
    setTimeout(() => {
        closePopup();
    }, 2000); // Fecha o popup após 2 segundos
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function validateEmail() {
    const emailField = document.getElementById("emailField");
    const email = emailField.value;

    if (!email || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }
    
    emailField.value = ""

    showPopup();
    
    return false;
}




