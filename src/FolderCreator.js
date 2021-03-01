export function folderCreator(createFolderButton, userTextInput, main, list){
    createFolderButton.onclick = function(){
        console.log("creating a folder")
        var mainFolderHolder = document.createElement("div");
      
        var newFolder = document.createElement("div");
        newFolder.setAttribute("draggable", "true");
        newFolder.classList.add("collapsible");  
        newFolder.classList.add("folder");
        // newFolder.id =  number;
        var name = userTextInput.value;
        // number += 1;
        newFolder.innerHTML = name;
      
        var newFolderDiv = document.createElement("div");
        newFolderDiv.classList.add("content");
        // newFolderDiv.id = number;
      
        
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButtonFolder");
      
        deleteButton.onclick = function () {
          mainFolderHolder.remove();
          while (newFolderDiv.getElementsByClassName("node") != undefined) {
            var childrenOfFolder = newFolderDiv.getElementsByClassName("node");
            list.appendChild(childrenOfFolder[0]);
          }
      
        }
      
        newFolder.addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.children[0];
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      
        
        newFolder.appendChild(newFolderDiv);
        mainFolderHolder.appendChild(newFolder);
        mainFolderHolder.appendChild(deleteButton);
       // var locationIdForOrganizer = '#' + organizerId;
        var folderLocation =  document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#FollowedChannels").querySelector("#organizer").querySelector(".tw-relative");
        console.log(folderLocation);
        folderLocation.insertBefore(mainFolderHolder, folderLocation.children[0]); 
        main.createFolderDropZone(newFolderDiv);
      
      };
}