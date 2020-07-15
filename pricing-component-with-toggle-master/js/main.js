const toggle = document.getElementById('toggle');
const prices = document.getElementById('prices');

toggle.addEventListener('change', () => {
    prices.classList.toggle('show');
});
