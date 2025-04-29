let cover = document.getElementById("intro-cover");
            let shown = false;

            window.addEventListener("scroll", () => {
                if (!shown && window.scrollY > 20) {
                cover.classList.add("hidden");
                shown = true;
                }
            });

// Iniciar AOS
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Iniciar Swiper para Galería
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  // Iniciar VanillaTilt en tarjetas fancy-hover
  VanillaTilt.init(document.querySelectorAll(".fancy-hover"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  });
  

// Iniciar VanillaTilt en tarjetas con clase .tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});
