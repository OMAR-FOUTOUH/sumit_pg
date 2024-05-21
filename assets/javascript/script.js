'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


// slides

document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 1;
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.image-description').length;
  const paginationItems = document.querySelectorAll('.pagination-item');

  const updateSlidePosition = () => {
      slides.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
      paginationItems.forEach(item => item.classList.remove('active'));
      document.querySelector(`.pagination-item[data-slide="${currentSlide}"]`).classList.add('active');
  };

  document.querySelector('.previous').addEventListener('click', () => {
      currentSlide = currentSlide > 1 ? currentSlide - 1 : slideCount;
      updateSlidePosition();
  });

  document.querySelector('.next').addEventListener('click', () => {
      currentSlide = currentSlide < slideCount ? currentSlide + 1 : 1;
      updateSlidePosition();
  });

  paginationItems.forEach(item => {
      item.addEventListener('click', () => {
          currentSlide = parseInt(item.getAttribute('data-slide'));
          updateSlidePosition();
      });
  });

  updateSlidePosition();
});

