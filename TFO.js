// clicking more button
var isClickedShow = true;

//you may not need this if statement; keep it just in case
if (isClickedShow) {
     var more = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-show-more-toggle__button").querySelector("span").click();
     isClickedShow = false;
}


//changing follows
var streams = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelectorAll(".tw-transition");
var list = document.createElement("UL");

var number = 0
for ( stream of streams) {
  stream.id = number;
  stream.draggable= "true";
  stream.classList.add("dropzone");
//   number += 1;
//   var item = document.createElement("LI");
//   item.appendChild(stream);
//   list.appendChild(item);
}

document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").appendChild(list);

var dragged;
var id;
var index;
var indexDrop;
var list;

  document.addEventListener("dragstart", ({target}) => {
      dragged = target;
      id = target.id;
      list = target.parentNode.children;
      for(var i = 0; i < list.length; i += 1) {
      	if(list[i] === dragged){
          index = i;
        }
      }
  });

  document.addEventListener("dragover", (event) => {
      event.preventDefault();
  });

  document.addEventListener("drop", ({target}) => {
   if(target.className == "dropzone" && target.id !== id) {
       dragged.remove( dragged );
      for(var i = 0; i < list.length; i += 1) {
      	if(list[i] === target){
          indexDrop = i;
        }
      }
      console.log(index, indexDrop);
      if(index > indexDrop) {
      	target.before( dragged );
      } else {
       target.after( dragged );
      }
    }
  });