// clicking more button
var isClickedShow = true;

//you may not need this if statement; keep it just in case
if (isClickedShow) {
     var more = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-show-more-toggle__button").querySelector("span").click();
     isClickedShow = false;
}

//changing follows
var follows = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelectorAll(".tw-transition");