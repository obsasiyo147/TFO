// -----------------------------------Making Elements dragable ---------------------------------------------
var dropzone = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");
var nodes = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#dropzone").querySelector(".tw-relative").querySelector("ul").querySelectorAll("li");
var streamsDiv = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelector("ul");

const observer = new MutationObserver(mutations => {
  console.log("The mutation happend");
});

observer.observe(nodes, {
  // subtree: true,
  // childList: true,
  // characterData: true,
  // characterDataOldValue: true

});


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
  console.log(selectedNode);
  if(selectedNodePos == 1){
    selectedNodePos = 0;
  }
  streamsDiv.insertBefore(selectedNode, streamsDiv.children[selectedNodePos]);
  selectedNodePos = 0;
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

