const hamBtn = document.querySelector('#hamburger-btn');
hamBtn.addEventListener('click', () => {
  if (hamBtn.firstElementChild.textContent === 'close') {
    hamBtn.firstElementChild.textContent = 'menu';
  } else {
    hamBtn.firstElementChild.textContent = 'close';
  }
});