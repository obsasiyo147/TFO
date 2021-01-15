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
ref.remove()



// Making Elements dragable
var dropzone = channels;
var nodes = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#dropzone").querySelector(".tw-relative").querySelectorAll(".tw-transition");
var streamsDiv = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelector("ul");
var selectedNode = '';
var selectedNodePos = 0;

// Nodes EventListener
for ( var i = 0; i < nodes.length; i++){
  
  nodes[i].addEventListener("mousedown", (ev) => { 
    console.log("MouseDown");
    //console.log(ev.currentTarget.id);
  });

  nodes[i].addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData('text', ev.currentTarget.id);
    console.log('Dragstarted'); 
  
    selectedNode = document.getElementById(ev.currentTarget.id);
  
    setTimeout(() => {
      dropzone.removeChild(selectedNode);
    }, 0) 
  
  });
  
}

// Dropzone EventListener
dropzone.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    console.log('Dragover');
    whereAmI(ev.clientY);
});

dropzone.addEventListener("drop", (ev) => {
  ev.preventDefault();
  console.log('Dropped on ' + selectedNodePos);
  streamsDiv.insertBefore(selectedNode, streamsDiv.children[selectedNodePos]);
  resetNode();

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

    // Tests
  //   console.log(nodes[i]['innderHTML'] + ' is top value of ' + yTop); // Something is wrong with you
  //   console.log(nodes[i]['innderHTML'] + ' is center value of ' + yCenter);
  //   console.log(nodes[i]['innderHTML'] + ' is bottom value of ' + yBottom);
  //   console.log('-----------------');
   }
}

function whereAmI(currentYPos){ // There is a problem with the code
  establishNodePostions();
   //identify the node that is directly above the selectedNode
   for(var i = 0; i < nodes.length; i++){
    //console.log(nodes[i]['yPos']);
    //console.log(currentYPos);

     if (nodes[i]['yPos'] < currentYPos){ // something weird is happening her
       //This node Must be Higher
       var nodeAbove = document.getElementById(nodes[i]['id']);
       selectedNodePos = i + 1;
      }else {
        if (!nodeBelow){
          var nodeBelow = document.getElementById(node[i]['id']);
        }
      }

    }
    
     if(typeof nodeAbove == 'undefined'){ // This works
       selectedNodePos = 0;
     }

     resetNode();

     if (typeof nodeBelow == 'object'){
       nodeBelow.style.marginTop = '3em';
       nodeBelow.style.transition = '1.8s';
     }
    
      console.log(selectedNodePos);
      console.log('------------------');
   }

function resetNode(){
  for (var i= 0; i < nodes.length; i++ ){
    document.getElementById(nodes[i]['id']).style.marginTop = '0.5em';

  }
}



// -------------------------- Control Center ----------------------------------

// Data query
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
//controlCenterHeader.classList.add("tw-flex");
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

//var spanImgCloseButton = document.createElement("span");


//buttonCloseWindow.appendChild(spanImgCloseButton);
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
createFolderButton.onclick = function(){
  var newFolder = document.createElement("li");
  newFolder.setAttribute("draggable", "true");
  newFolder.classList.add("node");
  newFolder.id =  number + "folder";
  var name = userTextInput.value;
  number += 1;
  newFolder.innerHTML = name;
  streamsDiv.insertBefore(newFolder, streamsDiv.children[0]);

}; 
controlCenterInfo.appendChild(userTextInput)
controlCenterInfo.appendChild(createFolderButton);
controlCenterSection.appendChild(controlCenterInfo);


//Combine html
controlCenterBodyDiv.appendChild(controlCenterHeader);
controlCenterBodyDiv.appendChild(controlCenterSection);
root.appendChild(controlCenterBodyDiv);




