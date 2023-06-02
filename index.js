const $modalWrapper = document.querySelector('.modal__wrapper');
const $modal = document.querySelector('.modal');
const $contactForm = document.querySelector('#contact__form');
const $loading = document.querySelector('.modal__overlay--loading');
const $success = document.querySelector('.modal__overlay--success');

/*

    Open Pop Up

*/

// btns that open modal
const modalStarters = [
  document.querySelector('#nav__about'),
  document.querySelector('#nav__contact'),
  document.querySelector('#social__btn--contact'),
  document.querySelector('#footer__contact'),
  document.querySelector('.mail__btn'),
  document.querySelector('.about-me'),
];

// add event listeners to said btns
for (let btn of modalStarters) {
  btn.addEventListener('click', () => {
    $modalWrapper.classList.add('modal--open');
    $modal.classList.add('modal--open');
    $modal.classList.add('modal--opacity');

    // hide heading + nav when modal is open
    // document.body.classList.add('hide');
  });
}

/*

    Close Pop Up

*/

function closemodal() {
  $modal.classList.remove('modal--opacity');
  $modalWrapper.classList.remove('modal--open');
  setTimeout(() => {
    $modal.classList.remove('modal--open');
  }, 500);
  setTimeout(() => {
    $loading.classList.remove('modal__overlay--visible');
    $success.classList.remove('modal__overlay--visible');
  }, 750);
}

// Click X -> Close Pop Up
const closeBtn = document.querySelector('.modal__exit-btn');
closeBtn.addEventListener('click', closemodal);

// Click outside of pop up -> close pop up
const outsidePop = document.querySelector('.modal__wrapper');
outsidePop.addEventListener('click', closemodal);

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

$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  $loading.classList.add('modal__overlay--visible');

  emailjs
    .sendForm('service_vbc5994', 'template_x9t7sqw', event.target, 'fF_O7kEQetQW4I_Lt')
    .then(() => {
      $loading.classList.remove('modal__overlay--visible');
      $success.classList.add('modal__overlay--visible');
      $contactForm.reset();
    })
    .catch(() => {
      $loading.classList.remove('modal__overlay--visible');
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
