// ----------------------Create Organizer Channel------------------------------

// get Div that controls channels
var channels = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");
channels.id = "dropzone";

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
actualHeader.classList.add("same-font");
actualHeader.textContent = "ORGANIZER CHANNEL";
headerDiv.appendChild(actualHeader);

// Channel holder
var channelHolder = document.createElement("div");
channelHolder.classList.add("tw-relative");
channelHolder.classList.add("tw-transition-group");
organizer.appendChild(channelHolder);


//Getting followed
var streams = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelectorAll(".tw-transition");

// putting varies attributes and moving follwed to created div
var list = document.createElement("ul");
var number = 0;
for (stream of streams) {

// Stream info
stream.id = number;
stream.setAttribute("draggable", "true");

// List info
var item = document.createElement("li");
item.setAttribute("draggable", "true");
item.classList.add("node");
item.id = number;


// adding to html
item.appendChild(stream);
list.appendChild(item);
//stream.classList.add("node");
number += 1;
}
channelHolder.appendChild(list);

// add to side bar Channels
var ref = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-section");
channels.insertBefore(organizer, ref);

//removes the show less and header for the followed channel
ref.remove();


