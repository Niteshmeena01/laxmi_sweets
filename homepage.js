const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

/* Close menu on link click */

document.querySelectorAll(".navbar a").forEach(link => {

  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

});

/* Navbar shadow on scroll */

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.style.boxShadow =
    "0 5px 15px rgba(0,0,0,0.15)";
  }

  else{
    header.style.boxShadow =
    "0 2px 10px rgba(0,0,0,0.1)";
  }

});