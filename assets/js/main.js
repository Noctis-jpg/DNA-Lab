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

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
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
