export class CreateDropZone {
  constructor(dropzone) {
    this.dropzone = dropzone;
    this.nodes = this.dropzone.children;
    this.selectedNode = '';
    this.selectedNodePos = 0;

    for (var i = 0; i < this.nodes.length; i++) {

      this.nodes[i].addEventListener("dragstart", (ev) => {
          ev.dataTransfer.setData('text', ev.currentTarget.id);
          console.log('Dragstarted'); 
          this.selectedNode = document.getElementById(ev.currentTarget.id);
          console.log(this.selectedNode); 
          dropzone.removeChild(selectedNode);

        });
    }

    this.dropzone.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      console.log('Dragover');
  
      this.whereAmI(ev.clientY);
  });

  this.dropzone.addEventListener("drop", (ev) => {
    ev.preventDefault();
    console.log('Dropped on ' + this.selectedNodePos);
    console.log(this.selectedNode);
    if(this.selectedNodePos == 1){
      this.selectedNodePos = 0;
    }
    this.dropzone.insertBefore(this.selectedNode, this.dropzone.children[this.selectedNodePos]);
    this.selectedNodePos = 0;

  });
}


  // Get location of nodes
  establishNodePostions() {
    for (var i = 0; i < this.nodes.length; i++) {
      this.element = document.getElementById(this.nodes[i]['id']);
      this.position = this.element.getBoundingClientRect();
      this.yTop = this.position.top;
      this.yBottom = this.position.bottom;
      this.yCenter = this.yTop + ((this.yBottom - this.yTop) / 2); // distance between top and btm: center
      this.nodes[i]['yPos'] = this.yCenter;
    }
  }


  whereAmI(currentYPos) {
    this.establishNodePostions();
    this.nodeAbove = undefined; //identify the node that is directly above the selectedNode
    for (var i = 0; i < this.nodes.length; i++) {

      if (this.nodes[i]['yPos'] < currentYPos) {
        //This node Must be Higher
        this.nodeAbove = document.getElementById(this.nodes[i]['id']);
        this.selectedNodePos = i + 1;
      }
    }

    if (typeof nodeAbove == undefined) { // This works
      this.selectedNodePos = 0;
    }

    console.log(this.selectedNodePos);
  }


  setItem(newItem) {
    this.dropzone.appendChild(newItem);
    newItem.addEventListener("dragstart", (ev) => {
      ev.dataTransfer.setData('text', ev.target.id);
      console.log("dragstart");
      this.selectedNode = document.getElementById(ev.target.id);
      console.log(this.selectedNode);
      setTimeout(() => {
        this.dropzone.removeChild(this.selectedNode);
      }, 0);
    });
  }

  createFolderDropZone(folder){
    folder.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      console.log('Dragover');
  
      this.whereAmI(ev.clientY);
  });

  folder.addEventListener("drop", (ev) => {
    ev.preventDefault();
    console.log('Dropped on ' + this.selectedNodePos);
    console.log(this.selectedNode);
    if(this.selectedNodePos == 1){
      this.selectedNodePos = 0;
    }
    folder.insertBefore(this.selectedNode, folder.children[0]);
    this.selectedNodePos = 0;
  });
  }
  
}
