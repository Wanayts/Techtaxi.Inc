document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.blog-buttons button');
  const blogs = document.querySelectorAll('.blog-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-warning');
        btn.classList.add('btn-clear-secondary');
      });

      button.classList.add('active', 'btn-warning');
      button.classList.remove('btn-clear-secondary');

      // filtering
      blogs.forEach(blog => {
        const category = blog.dataset.category;

        if (filter === 'all' || category.includes(filter)) {
          blog.style.display = '';
        } else {
          blog.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonGroup = document.querySelector('.case-buttons');
  const buttons = buttonGroup.querySelectorAll('button');
  const items = document.querySelectorAll('.case-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // 🔹 Active button handling
      buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-warning');
        btn.classList.add('btn-clear-secondary');
      });

      button.classList.add('active', 'btn-warning');
      button.classList.remove('btn-clear-secondary');

      // 🔹 Filtering logic
      items.forEach(item => {
        const category = item.dataset.category;

        if (filter === 'all' || category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});