const slides = [
  {
    image: 'assets/images/techtaxi.png',
    breadcrumbs: ['Ship Management', 'Digital Transformation', 'Cryptocurrency'],
    title: `Every business faces unique challenges.<br>
            We turn those challenges into opportunities<br>
            through technology.`
  },
  {
    image: 'assets/images/bg.png',
    breadcrumbs: ['Tech Innovation', 'AI Solutions', 'Cloud Platforms'],
    title: `Innovating with technology to solve<br>
        complex problems and drive<br>
        meaningful business impact.`
  },
  {
    image: 'assets/images/new-ui.JPG',
    breadcrumbs: ['Identity', 'UI', 'Branding'],
    title: `Crafting meaningful UI/UX that<br>
        defines identity and builds<br>
        strong, memorable brands.`

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

