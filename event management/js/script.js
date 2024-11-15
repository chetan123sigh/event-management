let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const popup = document.getElementById("popup");
const form = document.querySelector("#contact form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    popup.classList.add("open"); 
});

function closePopup() {
    popup.classList.remove("open"); 
}


var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,   
     }
  });