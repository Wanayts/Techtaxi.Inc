const filterButtons = document.querySelectorAll(".blog-buttons button");
  const blogItems = document.querySelectorAll(".blog-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      blogItems.forEach(item => {
        const category = item.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });


// blog filter.js
document.addEventListener('DOMContentLoaded', () => {
  const buttonGroup = document.querySelector('.blog-buttons');
  const buttons = buttonGroup.querySelectorAll('button');
  const items = document.querySelectorAll('.main-blog');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.category;

      // 🔹 Active button handling
      buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-warning');
        btn.classList.add('btn-clear-secondary');
      });

      button.classList.add('active', 'btn-warning');
      button.classList.remove('btn-clear-secondary');

      // 🔹 Filtering logic
      items.forEach(item => {
        const category = item.dataset.category || 'all';
        if (filter === 'all' || category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});





// index case filter.js
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

// portfolio section filter.js
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

// solution section filter.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.blog-buttons button');
  const items = document.querySelectorAll('.section-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.category;

      // 🔹 Active button handling
      buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-primary');
        btn.classList.add('btn-clear-secondary');
      });

      button.classList.add('active', 'btn-primary');
      button.classList.remove('btn-clear-secondary');

      // 🔹 Filtering items
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

// solution section filter.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.blog-buttons button');
  const items = document.querySelectorAll('.main-blog');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.category;

      // 🔹 Active button handling
      buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-primary');
        btn.classList.add('btn-clear-secondary');
      });

      button.classList.add('active', 'btn-primary');
      button.classList.remove('btn-clear-secondary');

      // 🔹 Filtering items
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












