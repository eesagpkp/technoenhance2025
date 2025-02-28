// Toggle Navigation Links on Mobile

 window.onscroll = function() {
            var navbar = document.querySelector(".navbar");
            var scroller1 = document.querySelector(".scroller");
            if (window.pageYOffset > 200) {  // Adjust scroll threshold if needed
                navbar.classList.add("sticky1");
                scroller1.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky1");
                scroller1.classList.remove("sticky");
            }
        };

// Toggle Dropdown Menus

registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", ()=>{
    window.location.assign("register.html")
})

drop1 = document.querySelector("#drop1");
drop2 = document.querySelector("#drop2");
toggle = document.querySelector("#toggle");
dropdowns3 = document.querySelector('.toggle-content');

toggle.addEventListener("click", ()=>{
    console.log("hii");
    img = document.querySelector('.toggle-btn img');
    if(dropdowns3.style.display == "block"){
        dropdowns3.style.display = "none";
        img.src = "hamburger.png";
    }
    else{ 
        dropdowns3.style.display = "block";
        img.src = "close.png";
    }
})

document.body.addEventListener('click', (e) => {
    if (!toggle.contains(e.target)) { // Check if click was outside the navbar
        dropdowns3.style.display = "none";
        img.src = "hamburger.png";
    }
});



drop1.addEventListener("click", ()=>{
    dropdowns1 = document.querySelector('#dropdown1');
    dropdowns2 = document.querySelector('#dropdown2');
    if(dropdowns1.style.display == "block"){
        dropdowns1.style.display = "none";
    }
    else{ 
        dropdowns1.style.display = "block";
    }
    dropdowns2.style.display = "none";
    console.log("hii everyone");
    
})


drop2.addEventListener("click", ()=>{
    dropdowns1 = document.querySelector('#dropdown1');
    dropdowns2 = document.querySelector('#dropdown2');
    if(dropdowns2.style.display == "block"){
        dropdowns2.style.display = "none";
    }
    else{ 
        dropdowns2.style.display = "block";
    }
    dropdowns1.style.display = "none";
})




window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.toggle-btn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        });
    }
    
}

//gallery
let slideIndex = 1; // Initial slide index
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesContainer = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; }

    // Slide to the next image using transform
    const offset = -(slideIndex - 1) * 100; // Calculating offset for sliding effect
    slidesContainer.style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex - 1].classList.add("active");
}

// Next/previous controls
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Set the current slide based on dot click
function currentSlideIndex(n) {
    showSlide(slideIndex = n);
}

// Automatic slideshow
function autoSlide() {
    showSlide(slideIndex += 1);
}

// Initialize slideshow
showSlide(slideIndex);
setInterval(autoSlide, 3000); // Auto change slide every 3 seconds
