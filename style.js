const categoryBtn = document.querySelector(".category-btn");
const dropdown = document.querySelector(".dropdown");

categoryBtn.addEventListener("click", () => {
  if (dropdown.style.display === "block") {
    dropdown.style.opacity = "0";
    dropdown.style.transform = "translateY(-10px)";
    setTimeout(() => {
      dropdown.style.display = "none";
    }, 300);
  } else {
    dropdown.style.display = "block";
    setTimeout(() => {
      dropdown.style.opacity = "1";
      dropdown.style.transform = "translateY(0)";
    }, 10);
  }
});

window.addEventListener("click", (e) => {
  if (!categoryBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.opacity = "0";
    dropdown.style.transform = "translateY(-10px)";
    setTimeout(() => {
      dropdown.style.display = "none";
    }, 300);
  }
});

document.querySelector('.category-btn').addEventListener('click', () => {
  document.querySelector('.dropdown').classList.toggle('show');
});

       

