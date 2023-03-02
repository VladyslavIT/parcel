const burgerButton = document.querySelector('.burger');
const showNavigation = document.querySelector('.nav');

burgerButton.addEventListener('click', function() {
    this.classList.toggle('active');
    showNavigation.classList.toggle('open');
});
