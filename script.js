<<<<<<< HEAD
const toggleBtn = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const numbers = document.querySelectorAll(".number");

function animateNumber(element) {
  const target = +element.getAttribute("data-target");
  let count = 0;
  const speed = 70; // semakin kecil, semakin cepat

  const update = () => {
    const increment = target / speed;
    if (count < target) {
      count += increment;
      element.textContent = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  };

  // Reset angka ke 0 sebelum animasi ulang
  element.textContent = "0";
  update();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".number").forEach((num) => {
          animateNumber(num);
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(document.querySelector("#about"));

// galeri sliding
const track = document.querySelector(".gallery-track");
const items = document.querySelectorAll(".gallery-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let index = 0;

function getVisibleItems() {
  return window.innerWidth < 768 ? 1 : 3;
}

function updateGallery() {
  const visibleItems = getVisibleItems();
  const itemWidth = items[0].offsetWidth + 30; // 30 = margin kanan kiri (15px)
  const offset = -(index * itemWidth);
  track.style.transform = `translateX(${offset}px)`;

  items.forEach((item, i) => {
    if (i >= index && i < index + visibleItems) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  index = Math.max(index - 1, 0);
  updateGallery();
});

nextButton.addEventListener("click", () => {
  const visibleItems = getVisibleItems();
  index = Math.min(index + 1, items.length - visibleItems);
  updateGallery();
});

window.addEventListener("resize", updateGallery);

// Pertama kali tampil
updateGallery();
=======
const toggleBtn = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const numbers = document.querySelectorAll(".number");

function animateNumber(element) {
  const target = +element.getAttribute("data-target");
  let count = 0;
  const speed = 70; // semakin kecil, semakin cepat

  const update = () => {
    const increment = target / speed;
    if (count < target) {
      count += increment;
      element.textContent = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  };

  // Reset angka ke 0 sebelum animasi ulang
  element.textContent = "0";
  update();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".number").forEach((num) => {
          animateNumber(num);
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(document.querySelector("#about"));
>>>>>>> 0a252adea0c595f6ea7701f1451ea3bd7f58a9d5
