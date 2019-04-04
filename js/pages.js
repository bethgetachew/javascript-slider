/*jshint esversion: 6*/

//alert("Javascript is working and creating this mad annoying pop up!!");

// When I click the next button
// Show a new pages
// Each page should show a different background color, circle color & content

// When I click the previous button
// show the previous pages

// When I click the random button
// Show a random page

// When I press a key
// Show the next or previous page

// Step 1: Add the content for our pages
// To create a list use square brackets []
// To create a object use {}
// To create a list of objects use both [{},{},{}];

const pages = [{
    content: "a London-based web developer, designer & teacher.",
    background: "linear-gradient(0deg, rgba(34, 195, 186, 1) 0%, rgba(180, 253, 45, 1) 100%)",
    circle: "#EEFF00"
  },
  {
    content: "currently available",
    background: "linear-gradient(90deg, rgba(153,230,255,1) 0%, rgba(246,172,255,1) 50%, rgba(115,244,144,1) 100%);;",
    circle: "#FF0000"
  },
  {
    content: "is usually laughing",
    background: "linear-gradient(0deg, rgba(10,0,255,1) 0%, rgba(255,0,247,1) 100%)",
    circle: "#ffffff"
  },
  {
    content: `letting you <a href="cv.pdf">download her cv</a>`,
    background: "linear-gradient(0deg, rgba(255,164,0,1) 0%, rgba(255,0,0,1) 100%)",
    circle: "#0F00FF"
  }
];

// Step 2: Pick the tags we want to use in HTML & save them in constants
const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");
const nextTag = document.querySelector(".next");
const previousTag = document.querySelector(".previous");
const randomTag = document.querySelector(".random");
const h2Tag = document.querySelector("h2");

// Step 3: We need to knwo which page we are on in order to change it - so we need a way of tracking This

let pageNumber = 0;

// Step 4: Create an action that increases the pageNumber

const next = function() {
  pageNumber = pageNumber + 1;
  // We only have 4 pages and we only want to be able to increase the page number to 5

  //pages.length will print out the number of pages in our list. Currently this is 4. However we start counting from 0 in programming so we -1
  if (pageNumber > pages.length - 1) {
    // Set back to page 1
    pageNumber = 0;
  }
};



// Step 5: Create an action that decreases the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1;
  // If the page number gets to 0, change the page number to the last page in our list
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
};
// Step 7: Create an action that generates a random pageNumber

const random = function() {
  // Create a random number using Math.random() - this creates a number between 0-1 that has decimal places
  // So we multiply it by the number of pages we have
  // We want a whole number so we wrap Math.random * pages.length in Math.floor
  pageNumber = Math.floor(Math.random() * pages.length);
};

// Step 10: Update the content on our page with the content from our pages listed
const updatePage = function() {
  // Update the content in our bodyTag
  h2Tag.innerHTML = pages[pageNumber].content;
  //Update the circle background
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.background = pages[pageNumber].background;
};

// Step 6: Attatch an event listener to the next button & call it the next function
nextTag.addEventListener("click", function() {
  next();
  console.log(pageNumber);
  updatePage();
});

previousTag.addEventListener("click", function() {
  previous();
  console.log(pageNumber);
  updatePage();
});

// Step 9: Attatch an event listener to the random button & call it the random function. Now the random button should rndomly select the page number.

randomTag.addEventListener("click", function() {
  random();
  console.log(pageNumber);
  updatePage();
});