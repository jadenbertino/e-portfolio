/*

Start Pop Up

*/

// btns that open popup
const popupStarters = [
  document.querySelector("#nav__about"),
  document.querySelector("#nav__contact"),
  document.querySelector("#social__btn--contact"),
  document.querySelector("#footer__contact")
];

// add event listeners to said btns
for (let btn of popupStarters) {
  btn.addEventListener("click", () => {
    document.querySelector(".popup__wrapper").classList.add("popup--clickable");
    document.querySelector(".popup").classList.add("popup--clickable");
    document.querySelector(".popup").classList.add("popup--opacity");
  })
};

/*

Close Pop Up

*/

function closePopUp() {
  document.querySelector(".popup").classList.remove("popup--opacity");
  document.querySelector(".popup__wrapper").classList.remove("popup--clickable");
  setTimeout(() => {
  document.querySelector(".popup").classList.remove("popup--clickable")
  }, 500);
}

// Click X -> Close Pop Up
const closeBtn = document.querySelector(".popup__exit-btn");
closeBtn.addEventListener("click", closePopUp);

// Click outside of pop up -> close pop up
const outsidePop = document.querySelector(".popup__wrapper");
outsidePop.addEventListener("click", closePopUp);


/*

CONTACT FORM

*/

// Submit Contact Form
const contactForm = document.querySelector("#contact__form");

contactForm.addEventListener("submit", (event) => {
  console.log(event);
});
