const navToggle = document.querySelector('.nav-toggle')
const closeBtn = document.querySelector('.close-btn')
const navOverlay = document.querySelector('.nav-overlay')
const menuNav = document.querySelector('.m-nav')
const prevBtns = document.querySelectorAll('.prev-btn')
const nextBtns = document.querySelectorAll('.next-btn')
const prevKey = document.querySelector('.prev-key')
const nextKey = document.querySelector('.next-key')
const slideContainer = document.querySelectorAll('.hero-slides')
const slides = document.querySelectorAll('.slide')

console.log(slides.length);

// open menu
navToggle.addEventListener('click', () => {
 navOverlay.classList.add('show')
 menuNav.classList.add('show')
})

// close menu
closeBtn.addEventListener('click', () => {
 navOverlay.classList.remove('show')
})


const startSlider = (type) => {
 const active = document.querySelector('.active');
 const last = document.querySelector('.last');
 let next = active.nextElementSibling;
 if (!next) {
    next = slides[0];
  }

  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = slides[slides.length - 1];
    }
    next.classList.remove('next');
    next.classList.add('last');
    console.log(next);
    return;
  }

  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');

}


nextBtns.forEach(function(btn) {
  btn.addEventListener('click', () => {
   startSlider();
 })
})

prevBtns.forEach(function(btn) {
  btn.addEventListener('click', () => {
   startSlider('prev');
 })
})


// Key Navigation
window.addEventListener('keydown', () => {
 
  if(nextKey) {
   startSlider()
  } else if(prevKey) {
   startSlider('prev')
  } else {
   return ''
  }
  
})




