const slides = [
  {
    image: 'assets/images/techtaxi.png',
    breadcrumbs: ['Trading Systems', 'Ship Management', 'School Management'],
    title: `Every business faces unique challenges.<br>
            We turn those challenges into opportunities<br>
            through technology.`
  },
  {
    image: 'assets/images/bg.png',
    breadcrumbs: ['Cloud Platforms', 'AI Solutions', 'Automation'],
    title: `Innovating with technology<br>
            to streamline operations and<br>
            drive impact.`
  },
  {
    image: 'assets/images/new-ui.jpg',
    breadcrumbs: ['UI/UX Design', 'Branding', 'Product Interfaces'],
    title: `Crafting meaningful UI/UX<br>
        that elevates your brand<br>
        and engages users.`

  }
];

const heroBg = document.querySelector('.hero-bg');
const heroBreadcrumbs = document.getElementById('hero-breadcrumbs');
const heroTitle = document.getElementById('hero-title-breadcrumbs');
const dots = document.querySelectorAll('.hero-dots .dot');

let currentIndex = 0;
let autoSlideTimer = null;
let isAnimating = false;

// ---------------- CORE FUNCTION ----------------
function showSlide(index) {
  if (isAnimating || index === currentIndex) return;
  isAnimating = true;

  currentIndex = index;

  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');

  heroBg.classList.add('fade-out');
  heroTitle.classList.add('hidden');
  heroBreadcrumbs.classList.add('hidden');

  setTimeout(() => {
    heroBg.style.backgroundImage = `url('${slides[index].image}')`;
    heroTitle.innerHTML = slides[index].title;
    heroBreadcrumbs.innerHTML =
      slides[index].breadcrumbs.map(b => `<span>${b}</span>`).join('');

    heroBg.classList.remove('fade-out');
    heroTitle.classList.remove('hidden');
    heroBreadcrumbs.classList.remove('hidden');

    setTimeout(() => {
      isAnimating = false;
    }, 400);
  }, 400);
}

// ---------------- AUTO SLIDE ----------------
function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    const next = (currentIndex + 1) % slides.length;
    showSlide(next);
  }, 10000);
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

// ---------------- DOT CLICKS ----------------
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(Number(dot.dataset.index));
    resetAutoSlide();
  });
});

// ---------------- INITIAL LOAD ----------------
heroBg.style.backgroundImage = `url('${slides[0].image}')`;
heroTitle.innerHTML = slides[0].title;
heroBreadcrumbs.innerHTML =
  slides[0].breadcrumbs.map(b => `<span>${b}</span>`).join('');

startAutoSlide();



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log("Back-to-top script loaded");
  });
});
