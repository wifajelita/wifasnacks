const categories = document.querySelectorAll(".category");
const items = document.querySelectorAll(".snack-item");
const toast = document.getElementById("toast");
const surpriseBtn = document.getElementById("surpriseBtn");

categories.forEach(btn => {
  btn.addEventListener("click", () => {
    categories.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    items.forEach(item => {
      item.style.display = category === "all" || item.dataset.type === category ? "block" : "none";
    });
  });
});

document.querySelectorAll(".heart").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    btn.textContent = btn.classList.contains("liked") ? "♥" : "♡";
  });
});

const cravings = ["Cookie Cloud!", "Crunchy Fries!", "Berry Bites!", "Choco Pop!", "Popcorn Party!"];
surpriseBtn.addEventListener("click", () => {
  const choice = cravings[Math.floor(Math.random() * cravings.length)];
  toast.innerHTML = `✨ Craving kamu hari ini: <b>${choice}</b>`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.left = "18px";
  nav.style.right = "18px";
  nav.style.padding = "20px";
  nav.style.background = "#fff";
  nav.style.borderRadius = "18px";
  nav.style.flexDirection = "column";
  nav.style.gap = "18px";
  nav.style.boxShadow = "0 20px 50px rgba(37,107,137,.12)";
});
