export function CreateChannel(first, last){
    var fullName = first + " " + last;
    // div for organizer channel
var channel = document.createElement("div");
channel.classList.add("side-nav-section");
channel.classList.add("tw-flex");
channel.classList.add("tw-flex-column");
channel.setAttribute("aria-label", fullName);
channel.setAttribute("role", "group");
channel.id = first;

// Header Div
var headerDiv = document.createElement("div");
headerDiv.classList.add("side-nav-header");
headerDiv.classList.add("tw-mg-1");
headerDiv.classList.add("tw-pd-t-05");
headerDiv.setAttribute("data-a-target", "side-nav-header-expanded");
headerDiv.setAttribute("role", "group");
channel.appendChild(headerDiv);

// Actual header
var actualHeader = document.createElement("h5");
actualHeader.classList.add("same-font");
actualHeader.textContent = fullName.toUpperCase();
headerDiv.appendChild(actualHeader);

// Channel holder or Location where the streams will go
var location = document.createElement("div");
location.classList.add("tw-relative");
location.classList.add("tw-transition-group");
channel.appendChild(location);

return [channel, location, first];
}