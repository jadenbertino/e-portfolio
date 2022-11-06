/*

Start Pop Up

*/

const popupStarters = [
  document.querySelector("#nav__about"),
  document.querySelector("#nav__contact"),
  document.querySelector("#social__btn--contact"),
  document.querySelector("#footer__contact")
];

for (let btn of popupStarters) {
  const startPopUp = btn.addEventListener("click", () => {
    // document.querySelector(".popup").classList.add("popup--opacity");
    document.querySelector(".popup__wrapper").classList.add("popup__wrapper--visibility");
    document.querySelector(".popup__wrapper").classList.add("popup__wrapper--opacity");
  })
}

/*

Close Pop Up

*/

function closePopUp() {
  const popup = document.querySelector(".popup__wrapper")
  popup.classList.remove("popup__wrapper--opacity");
  setTimeout(() => {
    popup.classList.remove("popup__wrapper--visibility")
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
