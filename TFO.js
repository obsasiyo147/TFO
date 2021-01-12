// clicking more button
var more = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-show-more-toggle__button").querySelector('[data-a-target="side-nav-show-more-button"]');

// Clicks the button enough times to make sure that "show more" is gone
var loops = 0
do {
  more.click();
  loops += 1;
 } while (loops <= 100);


// get Div that controls channels
var channels = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");

// div for organizer channel
var organizer = document.createElement("div");
organizer.classList.add("side-nav-section");
organizer.classList.add("tw-flex");
organizer.classList.add("tw-flex-column");
organizer.setAttribute("aria-label", "Organizer");
organizer.setAttribute("role", "group");


// Header Div
var headerDiv = document.createElement("div");
headerDiv.classList.add("side-nav-header");
headerDiv.classList.add("tw-mg-1");
headerDiv.classList.add("tw-pd-t-05");
headerDiv.setAttribute("data-a-target", "side-nav-header-expanded");
headerDiv.setAttribute("role", "group");
organizer.appendChild(headerDiv);

// Actual header
var actualHeader = document.createElement("h5");
actualHeader.textContent = "ORGANIZER CHANNEL";
headerDiv.appendChild(actualHeader);

// Channel holder
var channelHolder = document.createElement("div");
channelHolder.classList.add("tw-relative");
channelHolder.classList.add("tw-transition-group");
organizer.appendChild(channelHolder);


//changing follows
var streams = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelectorAll(".tw-transition");


var number = 0
for (stream of streams) {
  stream.id = number + "div";
  //stream.draggable = "true";
  //stream.setAttribute( "ondragstart" ,  "event.dataTransfer.setData('text/plain', event.target.id);" );
  number += 1
  channelHolder.appendChild(stream);
}

// add to side bar Channels
channels.appendChild(organizer);

//removes the show less and header for the followed channel
var RemoveFollowerChannel = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-section").remove();



// ----------------------- Extra Code -----------------------------------------
// var place = document.createElement("DIV");
// place.id = 3323;
// place.setAttribute ("ondragover" , "onDragOver(event);");
// place.textContent = "Hidfffffffffff";
// place.setAttribute ("ondrop" , "onDrop(event);");
// document.body.appendChild(place);


// function onDragOver(event) {
//     event.preventDefault();
//   }


//   function onDrop(event) {
//     const id = event.dataTransfer.getData('text', this.id);
//     const draggableElement = document.getElementById(id);
//     const dropzone = event.target;
//     dropzone.appendChild(draggableElement);
//     event.dataTransfer.clearData();
//   }




// var dragged;

// /* events fired on the draggable target */
// document.addEventListener("drag", function(event) {

// }, false);

// document.addEventListener("dragstart", function(event) {
//   // store a ref. on the dragged elem
//   dragged = event.target;
//   // make it half transparent
//   event.target.style.opacity = .5;
// }, false);

// document.addEventListener("dragend", function(event) {
//   // reset the transparency
//   event.target.style.opacity = "";
// }, false);

// /* events fired on the drop targets */
// document.addEventListener("dragover", function(event) {
//   // prevent default to allow drop
//   event.preventDefault();
// }, false);

// document.addEventListener("dragenter", function(event) {
//   // highlight potential drop target when the draggable element enters it
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "purple";
//   }

// }, false);

// document.addEventListener("dragleave", function(event) {
//   // reset background of potential drop target when the draggable element leaves it
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "";
//   }

// }, false);

// document.addEventListener("drop", function(event) {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   // move dragged elem to the selected drop target
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "";
//     dragged.parentNode.removeChild( dragged );
//     event.target.appendChild( dragged );
//   }
// }, false);