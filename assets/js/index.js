const navButtons = document.querySelectorAll("nav ul li");
navButtons.forEach((navButton) => {
  navButton.addEventListener("mouseover", (e) => {
    navButton.classList.add("anim-li");
  });
  navButton.addEventListener("mouseout", (e) => {
    navButton.classList.remove("anim-li");
  });
});
