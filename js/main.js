import { reviews } from "./reviews.js";
import { titles } from "./reviews.js";

//About Section
let tabs = Array.from(document.querySelectorAll(".tabs li"));
let tabsVision = Array.from(document.querySelectorAll(".tabs #vision p"));
let tabsGoal = Array.from(document.querySelectorAll(".tabs #goals p"));
let divs = Array.from(document.querySelectorAll(".paragraph > div"));
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    e.target.classList.add("active");
    divs.forEach((d) => {
      d.style.display = "none";
      d.classList.remove("active");
      if (e.target.id === d.id) {
        d.classList.add("active");
        d.style.display = "block";
        let para = document.querySelector(`.paragraph > #${d.id} > p`);
        let heading = document.querySelector(`.paragraph > #${d.id} > h3`);
        para.classList.add("active");
        heading.classList.add("active");

        if (d.id === "vision") {
          document.querySelector("#vision-list").style.display = "block";
        } else {
          document.querySelector("#vision-list").style.display = "none";
        }
      }
    });
  });
});


//Review Section
//array of images.
let images = ["img1", "img2", "img3", "img4"];
//array for names.
let names = [
  "Peter Parker",
  "Jesica Mayler",
  "Helena Micallester",
  "Mark john",
];

let { rev1, rev2, rev3, rev4 } = reviews;

let reviewsArray = [rev1, rev2, rev3, rev4];

let image = document.querySelector("#img");
let nameParag = document.querySelector("#name");
let parag = document.querySelector("#title");
let review = document.querySelector("#review-txt");

//get the arrows.
let rightArrow = document.querySelector("#arr-2");
let leftArrow = document.querySelector("#arr-1");

let num = 0;

function getNext() {
  let imageChild = document.querySelector("#img img");
  imageChild.remove();
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `/images/review${num + 1}.jpg`);
  newImage.style.cssText = ` width: 200px;
  height: 200px;
  border-radius: 50%;
  z-index:3`;
  image.appendChild(newImage);
  parag.innerText = `${titles[num]}`;
  nameParag.innerText = `${names[num]}`;
  review.innerText = `${reviewsArray[num]}`;
}
//event on right arrow to get images[i+1]
rightArrow.addEventListener("click", () => {
  num += 1;
  if (num === images.length) {
    num = 0;
  }
  getNext();
});
//event on left arrow to get images[i-1]
leftArrow.addEventListener("click", (e) => {
  num -= 1;
  if (num < 0) {
    num = images.length - 1;
  }
  getNext();
});

//Jquery
$(document).ready(function () {
  //header styling
  $("#header .links li a").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });
  $(window).scroll(function () {
    const windowTop = $(this).scrollTop();
    if (windowTop > 400) {
      $(".home-content .up-btn").show();
    } else {
      $(".home-content .up-btn").hide();
    }
  });

  //Scroll to Top on click
  $(".home-content .up-btn button").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });
});

/**
 *Function adds active class to the active link
 * @param {number} id
 */
function addActive(id) {
  let link = `ul li a[href="#${id}"]`;
  document.querySelector(link).classList.add("active");
}
let links = Array.from(document.querySelectorAll(".navbar ul li a"));
function removeActive() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}
let sections = Array.from(document.querySelectorAll("section"));
/*event to make the link corresponding to
    the section in viewport in active state.*/
const activateLink = () => {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((sec) => {
    if (
      scrollPosition >= sec.offsetTop - sec.offsetHeight * 0.25 &&
      scrollPosition <=
        sec.offsetTop + sec.offsetHeight - sec.offsetHeight * 0.25
    ) {
      removeActive();
      addActive(sec.id);
    }
  });
};
//Call the function on scrolling the window.
onscroll = () => {
  activateLink();
};
