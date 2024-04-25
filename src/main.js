const toggleCheckbox = document.getElementById("toggleCheckbox");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

toggleCheckbox.addEventListener("change", function () {
  const body = document.body;
  if (this.checked) {
    body.style.backgroundColor = "#171c28";
    body.style.color = "white";
    sunIcon.style.color = "white";
    moonIcon.style.color = "white";
  } else {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#444452";
    sunIcon.style.color = "#444452";
    moonIcon.style.color = "#444452";
  }
});

const section = document.querySelectorAll(".scroll");

function checkSlide() {
  section.forEach((box) => {
    const slideInAt =
      window.scrollY + window.innerHeight - box.clientHeight * 0.2;
    const boxBottom = box.offsetTop + box.clientHeight;
    const isHalfShown = slideInAt > box.offsetTop;
    const isNotScrolledPast = window.scrollY < boxBottom;

    if (isHalfShown && isNotScrolledPast) {
      box.classList.add("appear");
    } else {
      box.classList.remove("appear");
    }
  });
}

window.addEventListener("scroll", checkSlide);
