import { CreateChannel } from './CreateChannel';
import {CreateDropZone} from './CreateDropZone';
import { getStreams } from './GetStreams';
import { cleanData } from './CleanData';
import { folderCreator } from './FolderCreator';
import { isLive } from './IsLive';
import { checkList } from './CheckList';
import { currentStreamingChannels } from './CurrentlyStreamingChannels';

// Cleaning Data
cleanData();

// ----------------------Create Channel------------------------------

// get Div that controls channels
var channels = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");
channels.id = "FollowedChannels";

// div for organizer channel
var [organizer, organizerLocation, organizerId] = CreateChannel("organizer", "channel");
var [currentStreaming, currentStreamingLocation, currentStreamingId]  = CreateChannel("currently", "streaming");


setTimeout(function(){

//Getting followed
var streams = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelectorAll(".tw-transition a");
var list = getStreams(streams);
organizerLocation.appendChild(list);

// add to side bar Channels
var ref = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-section");
channels.insertBefore(currentStreaming, ref);
channels.insertBefore(organizer, ref);

//removes the show less and header for the followed channel
ref.remove();


// // ----------------------Making Elements dragable -----------------------------

var dropzone = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#FollowedChannels").querySelector("#dropZoneMain");
var main = new CreateDropZone(dropzone);


// // ----------------------Control Center ---------------------------------------
 var more = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-show-more-toggle__button").querySelector('[data-a-target="side-nav-show-more-button"]');

//Data query
var root = document.querySelector("#root").querySelector(".tw-absolute");
 
//Main container
     
var controlCenterBodyDiv = document.createElement("div");
controlCenterBodyDiv.id = "TFO";
controlCenterBodyDiv.classList.add("ffz-dialog");
controlCenterBodyDiv.classList.add("ffz-main-menu");
controlCenterBodyDiv.classList.add("tw-elevation-3");
controlCenterBodyDiv.classList.add("tw-c-background-alt");
controlCenterBodyDiv.classList.add("tw-c-text-base");
controlCenterBodyDiv.classList.add("tw-border");
controlCenterBodyDiv.classList.add("tw-flex");
controlCenterBodyDiv.classList.add("tw-flex-nowrap");
controlCenterBodyDiv.classList.add("tw-flex-column");



//Header bar

var controlCenterHeader = document.createElement("header");
controlCenterHeader.classList.add("tw-c-background-base");
controlCenterHeader.classList.add("tw-full-width");
controlCenterHeader.classList.add("tw-align-items-center");
controlCenterHeader.classList.add("tw-flex-nowrap");




var headerH3 = document.createElement("h3");
headerH3.innerHTML = "TFO";

var searchBar = document.createElement("div");

var buttonCloseWindow = document.createElement("button");
buttonCloseWindow.classList.add("tw-button-icon");
buttonCloseWindow.classList.add("tw-mg-x-05");
buttonCloseWindow.classList.add("tfo-button");
buttonCloseWindow.innerHTML = "Close Window";
buttonCloseWindow.onclick = function(){
  document.querySelector("#root").querySelector(".tw-absolute").querySelector("#TFO").remove();
}; 


controlCenterHeader.appendChild(headerH3);
controlCenterHeader.appendChild(searchBar);
controlCenterHeader.appendChild(buttonCloseWindow);


//Control center Main content 
 
var controlCenterSection = document.createElement("section");
controlCenterSection.classList.add("tw-border-t");
controlCenterSection.classList.add("tw-full-height");
controlCenterSection.classList.add("tw-full-width");
controlCenterSection.classList.add("tw-flex");
controlCenterSection.classList.add("tw-flex-nowrap");
controlCenterSection.classList.add("tw-overflow-hidden");


var controlCenterInfo = document.createElement("div");
var createFolderButton = document.createElement("button");
var userTextInput = document.createElement("input");
userTextInput.value = "New Folder";
createFolderButton.innerHTML = "Create New Folder";


// Folder Creator
folderCreator(createFolderButton, userTextInput, main, list);


controlCenterInfo.appendChild(userTextInput);
controlCenterInfo.appendChild(createFolderButton);
controlCenterSection.appendChild(controlCenterInfo);


//Combine html
controlCenterBodyDiv.appendChild(controlCenterHeader);
controlCenterBodyDiv.appendChild(controlCenterSection);

// add open button
var openButtonDiv = document.querySelector("#root").querySelector(".tw-flex").querySelector(".top-nav").querySelector(".tw-justify-content-end");
var openControlCenterDiv = document.createElement("div");
openControlCenterDiv.id = "TFOButton";
openControlCenterDiv.classList.add("tw-align-self-center");
openControlCenterDiv.classList.add("tw-flex-grow-0");
openControlCenterDiv.classList.add("tw-flex-nowrap");
openControlCenterDiv.classList.add("tw-flex-shrink-0");
openControlCenterDiv.classList.add("tw-mg-x-05");
var openControlCenterButton = document.createElement("button");
openControlCenterButton.innerHTML = "TFO";
openControlCenterDiv.appendChild(openControlCenterButton);
openButtonDiv.prepend(openControlCenterDiv);
openControlCenterButton.onclick = function(){
  root.appendChild(controlCenterBodyDiv);
  };

  
  const interval = setInterval(function() {
    currentStreamingChannels(currentStreamingLocation);
  }, 5000);
 

// ----------------- find live streams ---------------------- this needs to be a refreshing fucntion
  // Look through all the nodes in the list 
  // Look through each node to find if it is live or not
  // Copy node and add it to current live streams

}, 1000);