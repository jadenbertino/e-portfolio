// Initiate Pop Up
const popupStarters = [
  document.querySelector("#nav__about"),
  document.querySelector("#nav__contact"),
  document.querySelector("#social__btn--contact"),
  document.querySelector("#footer__contact")
];

for (let btn of popupStarters) {
  const startPopUp = btn.addEventListener("click", () => {
    document.querySelector(".popup").classList.add("popup--display")
  })
}

// Submit Contact Form
const contactForm = document.querySelector("#contact__form");

contactForm.addEventListener("submit", (event) => {
  console.log(event);
});
