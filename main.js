document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollProgress = document.getElementById("scrollProgress");
  const scrollTop = document.getElementById("scrollTop");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
    scrollTop.classList.add("visible");
  } else {
    navbar.classList.remove("scrolled");
    scrollTop.classList.remove("visible");
  }

  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  scrollProgress.style.width = scrolled + "%";
});

document.getElementById("scrollTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document
  .querySelector(".contact-form form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const submitBtn = this.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert("Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.");
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".skill-category, .timeline-item, .project-card, .education-card"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

document.querySelector(".mobile-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});

document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) rotate(2deg)";
  });

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

const heroTitle = document.querySelector(".hero-title");
const originalText = heroTitle.textContent;
let currentText = "";
let index = 0;

function typeEffect() {
  if (index < originalText.length) {
    currentText += originalText[index];
    heroTitle.textContent = currentText;
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.addEventListener("load", () => {
  setTimeout(() => {
    heroTitle.textContent = "";
    typeEffect();
  }, 1000);
});

document
  .querySelectorAll(".project-card, .skill-category, .contact-item")
  .forEach((el) => {
    el.style.cursor = "pointer";
  });

// Console message
console.log(`
  🚀 Hi there! 
  
  Tôi là Mai Xuân Chiến - Frontend Developer
  
  📧 Email: maichien.edu.com@gmail.com
  📱 Phone: 0326829206
  💻 GitHub: https://github.com/maichien1232001
  
  Cảm ơn bạn đã xem portfolio của tôi!
  `);
