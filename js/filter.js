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

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.blog-buttons button');
  const items = document.querySelectorAll('.section-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.category; // get category to filter

      // 1️⃣ Active button handling
      buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-warning');
        btn.classList.add('btn-clear-secondary');
      });
      button.classList.add('active', 'btn-warning');
      button.classList.remove('btn-clear-secondary');

      // 2️⃣ Filtering section items
      items.forEach(item => {
        const category = item.dataset.category;

        // show if matches filter or show all
        if (!filter || filter === 'all' || category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

const buttons = document.querySelectorAll('.portfolio-buttons button');
const items = document.querySelectorAll('.portfolio-item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category') || button.getAttribute('data-filter');

     buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-warning');
        btn.classList.add('btn-clear-secondary');
      });
      button.classList.add('active', 'btn-warning');
      button.classList.remove('btn-clear-secondary');

    // Show/hide portfolio items
    items.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        // Compare the category of the button and the item
        if (item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});

const blogButtons = document.querySelectorAll('.blog-buttons button');
const blogItems = document.querySelectorAll('.section-blog .col-6.col-md-4');

blogButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Toggle active button
    blogButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide blog items
    blogItems.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = item.getAttribute('data-category') === category ? 'block' : 'none';
      }
    });
  });
});
