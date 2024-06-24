$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');
        var video = $('#heroVideo')[0];
        if (video.paused) {
            video.play();
        }
    }, 2500);
});

  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        const logoAfter = document.querySelector('.Logo::after');
        logoAfter.style.animation = 'none';
        logoAfter.style.left = '15px';
    });
});
var swiper = new Swiper(".logosSw", {
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const numberOfParticles = 200;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 1 - .5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 1;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 1;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            if (this.blur > 0) {
                ctx.filter = `blur(${this.blur}px)`;
            } else {
                ctx.filter = 'none';
            }

            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 1, Math.PI * 1.5);
            ctx.closePath();
            ctx.fill();

            ctx.filter = 'none'; 
        }
    }

    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }

    init();
    animate();

    // window.addEventListener('resize', () => {
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    //     particlesArray.length = 0; 
    //     init(); 
    // });
    const areaWidthHeight = document.getElementsByClassName('ThreeSection')[0];

window.addEventListener('resize', () => {
    const canvas = document.querySelector('canvas');
    canvas.width = areaWidthHeight.offsetWidth;
    canvas.height = areaWidthHeight.offsetHeight;
    particlesArray.length = 0; 
    init(); 
});
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.SwiperSection');
    const defaultBg = section.getAttribute('data-default-bg');
    section.style.backgroundImage = `url(${defaultBg})`;

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
            640: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          },
    });

    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            const bg = slide.getAttribute('data-bg');
            section.style.backgroundImage = `url(${bg})`;
        });

        slide.addEventListener('mouseleave', () => {
            section.style.backgroundImage = `url(${defaultBg})`; // Hover'dan çıkınca varsayılan arka plana dön
        });

        slide.addEventListener('click', () => {
            const url = slide.getAttribute('data-url');
            window.location.href = url;
        });
    });
});


let Fx = gsap.timeline({
    scrollTrigger: {
        trigger: ".pinned",
        start:"top center",
        end: "bottom center",
        scrub: 1,
        markers:false,
        onEnterBack: () => {
            gsap.to(".pinned", {
                transform: "translate(0%,0%)",
                duration: 1,
                ease: "power1.inOut",
            });
        },
        onLeave: () => {
            gsap.to (".pinned", {
                transform: "translate(0%,-100%)",
                duration:1,
                ease:"power1.inOut"
            });
            gsap.to (".DetailPage", {
                width:"100%",
                duration:1,
                ease:"power1.inOut",
            });
        }

    }
})

document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const popupMenu = document.getElementById('popupMenu');
  const closeBtn = document.querySelector('.close-btn');
  const dffAl = document.querySelector('.DffAl');
  const popupRight = document.querySelector('.popup-right');
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const submenuLinks = document.querySelectorAll('.popup-left ul li > a');

  function openMenu() {
      gsap.timeline()
          .to(popupMenu, { width: '100%', height: '100%', opacity: 1, duration: 0.5 })
          .to(popupMenu.querySelector('.popup-left'), { opacity: 1, duration: 0.5 }, "-=0.25")
          .to(popupMenu.querySelector('.popup-right'), { opacity: 1, duration: 0.5 }, "-=0.25");
  }

  function closeMenu() {
      gsap.timeline()
          .to(popupMenu.querySelector('.popup-left'), { opacity: 0, duration: 0.25 })
          .to(popupMenu.querySelector('.popup-right'), { opacity: 0, duration: 0.25 }, "-=0.25")
          .to(popupMenu, { width: '0', height: '0', opacity: 0, duration: 0.5 });
      closeAllSubMenus(); // Menü kapatıldığında tüm alt menüleri de kapatalım
  }

  function toggleSubMenu(link) {
      const submenu = link.nextElementSibling;
      
      if (!submenu || !submenu.classList.contains('submenu')) {
          return; // Eğer alt menü yoksa veya sınıfı 'submenu' değilse, çık
      }

      if (submenu.style.display === 'block' && submenu.style.opacity === '1') {
          closeSubMenu(submenu, link);
      } else {
          closeAllSubMenus(); // Açmadan önce diğer açık olan alt menüleri kapatalım
          openSubMenu(submenu, link);
      }
  }

  function openSubMenu(submenu, link) {
      if (mediaQuery.matches) {
          gsap.to(submenu, { display: 'block', opacity: 1, height: 'auto', duration: 0.5 });
      } else {
          gsap.to(dffAl, { display: 'none', opacity: 0, duration: 0.5 });
          gsap.to(submenu, { display: 'block', opacity: 1, height: 'auto', duration: 0.5 });
          if (!popupRight.contains(submenu)) {
              popupRight.appendChild(submenu);
              submenu.setAttribute('data-original-parent', link.parentElement.getAttribute('id'));
          }
      }
  }

  function closeSubMenu(submenu, link) {
      if (mediaQuery.matches) {
          gsap.to(submenu, { display: 'none', opacity: 0, height: '0', duration: 0.5 });
      } else {
          gsap.to(dffAl, { display: 'flex', opacity: 1, duration: 0.5 });
          gsap.to(submenu, { display: 'none', opacity: 0, height: '0', duration: 0.5 });
          if (popupRight.contains(submenu)) {
              const originalParentId = submenu.getAttribute('data-original-parent');
              const originalParent = document.getElementById(originalParentId);
              if (originalParent) {
                  originalParent.appendChild(submenu);
              }
          }
      }
  }

  function closeAllSubMenus() {
      const submenus = document.querySelectorAll('.submenu');
      submenus.forEach(submenu => {
          gsap.set(submenu, { display: 'none', opacity: 0, height: '0' });
          if (popupRight.contains(submenu)) {
              const originalParentId = submenu.getAttribute('data-original-parent');
              const originalParent = document.getElementById(originalParentId);
              if (originalParent) {
                  originalParent.appendChild(submenu);
              }
          }
      });
  }

  menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
          openMenu();
      } else {
          closeMenu();
      }
  });

  closeBtn.addEventListener('click', function() {
      closeMenu();
      menuToggle.classList.remove('active');
  });

  submenuLinks.forEach((link, index) => {
      link.parentElement.setAttribute('id', `menu-item-${index}`);
      link.addEventListener('click', function(e) {
          e.preventDefault();
          toggleSubMenu(this);
      });
  });

  window.addEventListener('scroll', function() {
      if (window.scrollY > 400) { // Ayarlamak için mesafeyi değiştirin
          gsap.to(header, { backgroundColor: "#003e89", duration: 0.5 });
          header.classList.add('header-white');
          header.classList.remove('header-video');
      } else {
          gsap.to(header, { backgroundColor: "rgba(255, 255, 255, .2)", duration: 0.5 });
          header.classList.add('header-video');
          header.classList.remove('header-white');
      }
  });
});


  

let shape = gsap.timeline({
    scrollTrigger: {
        trigger: ".geometric-shape",
        start:"top center",
        end: "bottom center",
        scrub: 1,
        markers:false,
        onEnter: () => {
            gsap.to(".geometric-shape", {
                transform: "translate(100%,0%)",
                duration: 1,
                ease: "power1.inOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".geometric-shape", {
                transform: "translate(0%,0%)",
                duration: 1,
                ease: "power1.inOut",
            });
        },
    }
});


var swiper = new Swiper(".Certifates", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


  ScrollTrigger.create({
    trigger: ".GsapFixSection",
    start: "top top",
    end: "bottom bottom",
    onEnter: () => gsap.to(".sidebar", { display: "block", autoAlpha: 1 }),
    onLeaveBack: () => gsap.to(".sidebar", { display: "none", autoAlpha: 0 }),
    onLeave: () => gsap.to(".sidebar", { display: "none", autoAlpha: 0 }),
    onEnterBack: () => gsap.to(".sidebar", { display: "block", autoAlpha: 1 }),
    markers: true 
  });
  

  gsap.utils.toArray('.section').forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 100%",
      end: "top 50%",
      onEnter: () => gsap.to(section, { zIndex: 1 }),
      onLeaveBack: () => gsap.to(section, { zIndex: 0 }),
      markers: false 
    });
  
    gsap.fromTo(section, 
      { autoAlpha: 0, y: 50 },
      { 
        duration: 1,
        autoAlpha: 1, 
        y: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', 
          end: 'top 30%', 
          scrub: true, 
          markers: false 
        }
      }
    );
  });
  

  document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', (event) => {
      document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
      event.currentTarget.classList.add('active'); 
  
      const sectionId = event.currentTarget.getAttribute('data-section');
      const sectionElement = document.getElementById(sectionId);
      gsap.to(window, {
        duration: 1,
        scrollTo: { 
          y: sectionElement, 
          offsetY: 180 
        },
        ease: "power2.inOut"
      });
    });
  });
  