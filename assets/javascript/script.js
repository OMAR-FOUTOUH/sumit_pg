

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



// highlights
document.addEventListener('DOMContentLoaded', () => {
  const shortText = document.querySelector('.short-text');
  const longText = document.querySelector('.long-text');
  const learnMore = document.querySelector('.learn-more');
  const showLess = document.querySelector('.show-less');

  learnMore.addEventListener('click', () => {
      shortText.classList.add('hidden');
      longText.classList.remove('hidden');
  });

  showLess.addEventListener('click', () => {
      longText.classList.add('hidden');
      shortText.classList.remove('hidden');
  });
});


// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('showing');
      } else {
          entry.target.classList.remove('showing');
      }
  });
});

// Select all elements with the class 'hidden' using document.querySelectorAll
const hiddenElements = document.querySelectorAll('.hide');
const hiddenElements2 = document.querySelectorAll('.hide2');
// Observe each element in the NodeList
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));


// 

// Function to create a counter for a specific span element
function createCounter(spanElement) {
  // Retrieve the value attribute of the span element and convert it to a number
  let upperLimit = parseInt(spanElement.getAttribute("value"), 10);

  // Initialize a variable for the counter
  let upto = 0;

  // Define a function that updates the counter
  function updated() {
      // Update the inner HTML of the span element with the counter value
      spanElement.innerHTML = "+"+upto;
      // Increment the counter
      upto++;
      // Check if the counter has reached the upper limit
      if (upto > upperLimit) {
          // Clear the interval to stop the counter
          clearInterval(counts);
      }
  }

  // Set an interval to call the updated function every 100 milliseconds
  let counts = setInterval(updated, 50);
}

// Retrieve all the span elements by their common class name (e.g., "counter-span")
let spanElements = document.querySelectorAll('.counter-span');

// Iterate through each span element
spanElements.forEach((spanElement) => {
  // Create a counter for the current span element
  createCounter(spanElement);
});
