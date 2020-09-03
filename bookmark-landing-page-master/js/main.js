// Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLogo = document.getElementById('header-logo');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show-menu');
    mobileMenu.classList.toggle('show-menu');
    navLogo.classList.toggle('show-menu');
});

// Tab Section
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item')

// Select tab content Item
function selectItem(e) {
    // remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab item
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

// remove borders from all tab items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    })
}

// Remove bottom borders from all tab items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});


// // FAQ JS
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    // var currentlyActiveAccordion = document.querySelector(".accordion.is-open");

    // if(currentlyActiveAccordion && currentlyActiveAccordion!==accordion) {
    //   currentlyActiveAccordion.classList.toggle("is-open");
    //   currentlyActiveAccordion.nextElementSibling.style.maxHeight = 0;
    // }

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}