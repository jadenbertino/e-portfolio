// html elements
const popupWrapper = document.querySelector(".popup__wrapper");
const popup = document.querySelector(".popup");
const header = document.querySelector(".header__container");
const nav = document.querySelector("#nav");

/*

Start Pop Up

*/

// btns that open popup
const popupStarters = [
  document.querySelector("#nav__about"),
  document.querySelector("#nav__contact"),
  document.querySelector("#social__btn--contact"),
  document.querySelector("#footer__contact"),
  document.querySelector(".mail__btn"),
  document.querySelector(".about-me")
];

// add event listeners to said btns
for (let btn of popupStarters) {
  btn.addEventListener("click", () => {
    popupWrapper.classList.add("popup--open");
    // separate because need a delay between them when removing later on
    popup.classList.add("popup--open");
    popup.classList.add("popup--opacity");

    // hide heading + nav when popup is open
    header.classList.add('hide');
    nav.classList.add('hide');
  })
};


/*

Close Pop Up

*/

function closePopUp() {
  popup.classList.remove("popup--opacity");
  popupWrapper.classList.remove("popup--open");
  setTimeout(() => {
  popup.classList.remove("popup--open")
  }, 500);
  setTimeout(() => {
    header.classList.remove('hide');
    nav.classList.remove('hide');
  }, 750)
}

// Click X -> Close Pop Up
const closeBtn = document.querySelector(".popup__exit-btn");
closeBtn.addEventListener("click", closePopUp);

// Click outside of pop up -> close pop up
const outsidePop = document.querySelector(".popup__wrapper");
outsidePop.addEventListener("click", closePopUp);

/*

DARK MODE

*/

const toggleButton = document.querySelector("#btn__dark-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
})
/*

CONTACT FORM

*/

// Submit Contact Form
const contactForm = document.querySelector("#contact__form");

contactForm.addEventListener("submit", (event) => {
  console.log(event);
});
