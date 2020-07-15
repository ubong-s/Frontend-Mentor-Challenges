const hamburger = document.getElementById('hamburger');
const mobile = document.getElementById('mobile');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('show');
	mobile.classList.toggle('show');
});