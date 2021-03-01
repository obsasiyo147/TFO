export function cleanData(){

// Show hidden streams by pressing the show more button
var more = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-show-more-toggle__button").querySelector('[data-a-target="side-nav-show-more-button"]');
var loops = 0
do {
  more.click();
  loops += 1;
} while (loops <= 100);

// Cleaning Data
setTimeout(function(){
  var CleanNodes = document.querySelectorAll("#sideNav .side-bar-contents .tw-relative .tw-transition .side-nav-card .side-nav-card__link");
  CleanNodes.forEach((node) => {
    console.log("Cleaning");
    node.removeAttribute("data-a-id");
  });
  
  }, 1000);
  
}