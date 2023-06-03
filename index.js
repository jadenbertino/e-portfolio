const $modalBackdrop = document.querySelector('.modal__backdrop');
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
const $main = document.querySelector('main');

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * MODAL
 */

function fadeIn($) {
  $.classList.add('visible');
  setTimeout(() => {
    // must do on separate event loop for smooth transition
    $.classList.add('fade-in');
  });
}

function fadeOut($, transitionTime = 500) {
  $.classList.remove('fade-in');
  setTimeout(() => {
    $.classList.remove('visible');
  }, transitionTime);
}

function openModal() {
  fadeIn($modalBackdrop);
  fadeOut($main);
}

function closeModal() {
  fadeOut($modalBackdrop);
  setTimeout(() => {
    fadeIn($main);
  }, 500); // small delay before fading landing back in
}
$modalStarters.forEach(($btn) => {
  $btn.addEventListener('click', openModal);
});

function handleClose(e) {
  const exitButtonClick = e.target.classList.contains('modal__exit-btn');
  const outsideModalClick = e.target.classList.contains('modal__backdrop');
  if (!(exitButtonClick || outsideModalClick)) return;
  closeModal();
}

$modalBackdrop.addEventListener('click', handleClose);

/**
 * DARK MODE
 */

$toggleDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

/**
 * CONTACT FORM
 */

$contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  formData.append('service_id', 'service_66c3ltm');
  formData.append('template_id', 'template_x9t7sqw');
  formData.append('user_id', 'fF_O7kEQetQW4I_Lt');

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    fadeIn($modalLoading);
    await delay(1500);
    fadeOut($modalLoading);
    fadeIn($modalSuccess);
    await delay(3000);
    
    $contactForm.reset();
    fadeOut($modalSuccess);
    fadeOut($modalBackdrop);
    await delay(750)

    fadeIn($main);
  } catch (err) {
    console.error(err);
    alert(
      `The email service is temporarily unavailable. Please contact me directly at jaden@bertinofamily.com`
    );
    fadeOut($modalLoading)
    fadeOut($modalSuccess)
    fadeOut($modalBackdrop)
    await delay(750)
    fadeIn($main)
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
    shapes[i].style.transform = `translate(${x * direction}px, ${y * direction}px) rotate(${
      x * rotateFactor
    }deg)`;
  }
});