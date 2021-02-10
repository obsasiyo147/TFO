// clicking "show more" button
var more = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-show-more-toggle__button").querySelector('[data-a-target="side-nav-show-more-button"]');
  var loops = 0
  do {
    more.click();
    loops += 1;
  } while (loops <= 100);


// ---------------- Cleaning Data --------------------------------------------
setTimeout(function(){
var CleanNodes = document.querySelectorAll("#sideNav .side-bar-contents .tw-relative .tw-transition .side-nav-card .side-nav-card__link");
CleanNodes.forEach((node) => {
  console.log("Cleaning");
  node.removeAttribute("data-a-id");
});

}, 1000);



// -------------------------- Stream/Follows template -----------------------

// var elementTemplateDivMain = document.createElement("div");
// var elementTemplateDiv1 = document.createElement("div");
// var elementTemplateLink = document.createElement("a");


// var elementTemplatePic = document.createElement("div");
// var elementTemplateFig = document.createElement("figure");
// var elementTamplateImg = document.createElement("img");

// var elementTemplateData = document.createElement("div");
// var elementTemplateInfo = document.createElement("div");
// var elementTemplateTopText = document.createElement("div");
// var elementTemplateBottomText = document.createElement("div");
// var elementTemplateTopTextP = document.createElement("p");
// var elementTemplateBottomTextP = document.createElement("p");

// var elementTemplateLive = document.createElement("div");
// var elementTemplateLiveHolderDiv = document.createElement("div");

// var elementTemplateLiveStatus = document.createElement("div");

// var elementTemplateLiveCountHolder = document.createElement("div");
// var elementTemplateLiveCountSpan = document.createElement("span");


// // Text information
// elementTemplateTopText.appendChild(elementTemplateTopTextP);
// elementTemplateBottomText.appendChild(elementTemplateBottomTextP);
// elementTemplateInfo.appendChild(elementTemplateTopText);
// elementTemplateInfo.appendChild(elementTemplateBottomText);
// elementTemplateData.appendChild(elementTemplateInfo);

// // Live counter 
// elementTemplateLiveCountHolder.appendChild(elementTemplateLiveCountSpan);
// elementTemplateLiveHolderDiv.appendChild(elementTemplateLiveCountHolder);
// elementTemplateLiveHolderDiv.appendChild(elementTemplateLiveStatus);
// elementTemplateLive.appendChild(elementTemplateLiveHolderDiv);
// elementTemplateData.appendChild(elementTemplateLive);

// // combining everything
// elementTemplateLink.appendChild(elementTemplateData);
// elementTemplateLink.appendChild(elementTemplatePic);
// elementTemplateDiv1.appendChild(elementTemplateLink);
// elementTemplateDivMain.appendChild(elementTemplateDiv1);


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


setTimeout(function(){

//Getting followed
var streams = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelectorAll(".tw-transition a");

// putting varies attributes and moving follwed to created div
var list = document.createElement("ul");
var number = 0;

streams.forEach((stream) => {
    // Stream info
    stream.id = number;
    stream.setAttribute("draggable", "true");
    stream.className = '';
    stream.style = "";

   
    var div2 = document.createElement("div");
    div2.className = 'side-nav-card tw-relative ffz--side-nav-card-offline node';
    div2.appendChild(stream)

    // // List info
    var item = document.createElement("li");
    item.setAttribute("draggable", "true");
    item.classList.add("node");
    item.id = number;

    // adding to html
     item.appendChild(div2);
    list.appendChild(item);
    //stream.classList.add("node");
    number += 1;
});

channelHolder.appendChild(list);

// add to side bar Channels
var ref = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-section");
channels.insertBefore(organizer, ref);

//removes the show less and header for the followed channel
ref.remove();


// ----------------------Making Elements dragable -----------------------------

var dropzone = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");
var nodes = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#dropzone").querySelector(".tw-relative").querySelector("ul").querySelectorAll("li");
var streamsDiv = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelector("ul");


var selectedNode = '';
var selectedNodePos = 0;
var folderNode = '';

// Nodes EventListener
for ( var i = 0; i < nodes.length; i++){

  nodes[i].addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData('text', ev.currentTarget.id);
    console.log('Dragstarted'); 
    selectedNode = document.getElementById(ev.currentTarget.id);
    console.log(selectedNode);
    dropzone.removeChild(selectedNode);
    dropzone = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");
    nodes = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#dropzone").querySelector(".tw-relative").querySelector("ul").querySelectorAll("li");
    streamsDiv = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelector("ul");

  });
  
}

// Dropzone EventListener
dropzone.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    console.log('Dragover');
    dropzone = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");
    nodes = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#dropzone").querySelector(".tw-relative").querySelector("ul").querySelectorAll("li");
    streamsDiv = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelector("ul");

    whereAmI(ev.clientY);
});

dropzone.addEventListener("drop", (ev) => {
  ev.preventDefault();
  console.log('Dropped on ' + selectedNodePos);
  console.log(selectedNode);
  if(selectedNodePos == 1){
    selectedNodePos = 0;
  }
  streamsDiv.insertBefore(selectedNode, streamsDiv.children[selectedNodePos]);
  selectedNodePos = 0;
  dropzone = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");
  nodes = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#dropzone").querySelector(".tw-relative").querySelector("ul").querySelectorAll("li");
  streamsDiv = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelector("ul");

});


// Get location of nodes
function establishNodePostions(){
  for ( var i = 0; i < nodes.length; i++){
    var element = document.getElementById(nodes[i]['id']); // id problems
    var position = element.getBoundingClientRect();
    var yTop = position.top;
    var yBottom = position.bottom;
    var yCenter = yTop + ((yBottom - yTop) / 2); // distance between top and btm: center
    nodes[i]['yPos'] = yCenter;
  }

    // Tests
  //   console.log(nodes[i]['innderHTML'] + ' is top value of ' + yTop); // Something is wrong with you
  //   console.log(nodes[i]['innderHTML'] + ' is center value of ' + yCenter);
  //   console.log(nodes[i]['innderHTML'] + ' is bottom value of ' + yBottom);
  //   console.log('-----------------');
}

function whereAmI(currentYPos){ // There is a problem with the code
  establishNodePostions();
  

   //identify the node that is directly above the selectedNode
   for(var i = 0; i < nodes.length; i++){

     if (nodes[i]['yPos'] < currentYPos){ 
        //This node Must be Higher
        var nodeAbove = document.getElementById(nodes[i]['id']);
        selectedNodePos = i + 1;
      }
    }
    
     if(typeof nodeAbove == undefined){ // This works
       selectedNodePos = 0;
     }
      console.log(selectedNodePos);
   }




// ----------------------Control Center ---------------------------------------
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


// --------------------------------------Folder Creator ------------------------------------
createFolderButton.onclick = function(){
  var newFolder = document.createElement("li");
  newFolder.setAttribute("draggable", "true");
  newFolder.classList.add("smalldesc");

  newFolder.addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData('text', ev.currentTarget.id);
    console.log('Dragstarted'); 
    selectedNode = document.getElementById(ev.currentTarget.id);
    console.log(selectedNode);
    dropzone.removeChild(selectedNode);
    dropzone = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");
    nodes = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#dropzone").querySelector(".tw-relative").querySelector("ul").querySelectorAll("li");
    streamsDiv = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelector("ul");
  });


  newFolder.click = function(){
    document.getElementById(ev.currentTarget.id).classList.toggle('expand');
  };


  newFolder.classList.add("node");
  newFolder.id =  number + "folder";
  var name = userTextInput.value;
  number += 1;
  newFolder.innerHTML = name;
  streamsDiv.insertBefore(newFolder, streamsDiv.children[0]);
}; 


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

}, 1000);