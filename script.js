// ✨ Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 🖋️ Typewriter Effect for Subtitle
const text = "DevOps Enthusiast | Cloud & Linux Explorer";
const target = document.querySelector("header p");
target.textContent = "";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// 👀 Scroll Reveal Animation
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.6s ease';
});
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - window.innerHeight + 100;
    if (top > offset) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});
