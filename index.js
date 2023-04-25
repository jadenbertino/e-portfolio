const popupWrapper = document.querySelector('.popup__wrapper');
const popup = document.querySelector('.popup');
const contactForm = document.querySelector('#contact__form');
const loading = document.querySelector('.popup__overlay--loading');
const success = document.querySelector('.popup__overlay--success');

/*

    Open Pop Up

*/

// btns that open popup
const popupStarters = [
  document.querySelector('#nav__about'),
  document.querySelector('#nav__contact'),
  document.querySelector('#social__btn--contact'),
  document.querySelector('#footer__contact'),
  document.querySelector('.mail__btn'),
  document.querySelector('.about-me'),
];

// add event listeners to said btns
for (let btn of popupStarters) {
  btn.addEventListener('click', () => {
    popupWrapper.classList.add('popup--open');
    // separate because need a delay between them when removing later on
    popup.classList.add('popup--open');
    popup.classList.add('popup--opacity');

    // hide heading + nav when popup is open
    document.body.classList.add('hide');
  });
}

/*

    Close Pop Up

*/

function closePopUp() {
  popup.classList.remove('popup--opacity');
  popupWrapper.classList.remove('popup--open');
  setTimeout(() => {
    popup.classList.remove('popup--open');
  }, 500);
  setTimeout(() => {
    loading.classList.remove('popup__overlay--visible');
    success.classList.remove('popup__overlay--visible');
    document.body.classList.remove('hide');
  }, 750);
}

// Click X -> Close Pop Up
const closeBtn = document.querySelector('.popup__exit-btn');
closeBtn.addEventListener('click', closePopUp);

// Click outside of pop up -> close pop up
const outsidePop = document.querySelector('.popup__wrapper');
outsidePop.addEventListener('click', closePopUp);

/*

    DARK MODE

*/

const toggleButton = document.querySelector('#btn__dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

/*

    CONTACT FORM

*/

// Submit Contact Form

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  loading.classList.add('popup__overlay--visible');

  emailjs
    .sendForm('service_vbc5994', 'template_x9t7sqw', event.target, 'fF_O7kEQetQW4I_Lt')
    .then(() => {
      loading.classList.remove('popup__overlay--visible');
      success.classList.add('popup__overlay--visible');
      contactForm.reset();
    })
    .catch(() => {
      loading.classList.remove('popup__overlay--visible');
      alert(
        'The email service is temporarily unavailable. Please contact me directly at jaden@bertinofamily.com'
      );
    });
});

/*

  BACKGROUND DECORATIONS

*/

const moveFactor = 1 / 20;
const rotateFactor = 10;
const shapes = document.querySelectorAll('.shape');

document.body.addEventListener('mousemove', (event) => {
  const x = event.clientX * moveFactor;
  const y = event.clientY * moveFactor;
  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 === 1;
    const direction = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * direction}px, ${y * direction}px) rotate(${x * rotateFactor}deg)`;
  }
});
