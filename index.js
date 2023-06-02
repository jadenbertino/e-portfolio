const $modalBackdrop = document.querySelector('.modal__backdrop');
const $modal = document.querySelector('.modal');
const $modalLoading = document.querySelector('.modal__overlay--loading');
const $modalSuccess = document.querySelector('.modal__overlay--success');
const $modalStarters = [
  document.querySelector('#nav__contact'),
  document.querySelector('#social__btn--contact'),
  document.querySelector('#footer__contact'),
  document.querySelector('.mail__btn'),
];
const $closeModalBtn = document.querySelector('.modal__exit-btn');
const $toggleDarkModeBtn = document.querySelector('#btn__dark-mode');
const $contactForm = document.querySelector('#contact-form');

/**
 * OPEN MODAL
 */

function openModal() {
  $modalBackdrop.classList.add('modal__backdrop--visible');
  setTimeout(() => {
    $modal.classList.add('modal--fade-in');
  }); // must do on a separate event loop
}

$modalStarters.forEach(($btn) => {
  $btn.addEventListener('click', openModal);
});

/**
 * CLOSE MODAL
 */

function closeModal() {
  $modal.classList.remove('modal--fade-in');
  setTimeout(() => {
    $modalBackdrop.classList.remove('modal__backdrop--visible');
  }, 500); // must match css transition length
}

$modalBackdrop.addEventListener('click', (e) => {
  const exitButtonClick = e.target.classList.contains('modal__exit-btn');
  const outsideModalClick = e.target.classList.contains('modal__backdrop');
  if (!(exitButtonClick || outsideModalClick)) return;
  closeModal();
});

/**
 * DARK MODE
 */

$toggleDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

/**
 * CONTACT FORM
 */
// TODO: fix submit logic
$contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  $modalLoading.classList.add('modal__overlay--visible');

  try {
    // email.js comes from html sdk
    emailjs.sendForm('service_vbc5994', 'template_x9t7sqw', e.target, 'fF_O7kEQetQW4I_Lt');
    $modalLoading.classList.remove('modal__overlay--visible');
    $modalSuccess.classList.add('modal__overlay--visible');
    $contactForm.reset();
  } catch (err) {
    $modalLoading.classList.remove('modal__overlay--visible');
    alert(
      'The email service is temporarily unavailable. Please contact me directly at jaden@bertinofamily.com'
    );
  }
});

/**
 * BACKGROUND DECORATIONS
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
    shapes[i].style.transform = 
      `translate(${x * direction}px, ${y * direction}px) rotate(${x * rotateFactor}deg)`;
  }
});
