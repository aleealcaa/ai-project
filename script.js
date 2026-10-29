'use strict';
const answers = document.querySelectorAll('[data-answer]');
const feedback = document.querySelector('#feedback');
answers.forEach((button) => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    answers.forEach((answer) => answer.setAttribute('aria-pressed', String(answer === button)));
    feedback.textContent = button.dataset.answer === 'right'
      ? 'Exactly. Call back on a number you already know and verify the story independently. That is the FTC’s advice.'
      : 'A familiar voice can be cloned. Pause, then call your family member on a number you already know before sending money.';
  });
});
