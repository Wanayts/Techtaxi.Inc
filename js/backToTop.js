document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  const toggle = () => {
    btn.style.display = window.scrollY > 0 ? 'flex' : 'none';
  };

  toggle();
  window.addEventListener('scroll', toggle);

  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
