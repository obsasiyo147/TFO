import { checkList } from "./CheckList";

export function currentStreamingChannels(currentStreamingLocation){
    var updatedCurrentlyStream = checkList();
// console(updatedCurrentlyStream);
while (currentStreamingLocation.firstChild){
    console.log("deleting");
    currentStreamingLocation.removeChild(currentStreamingLocation.lastChild);
  }

for(var i = 0; i < updatedCurrentlyStream.length; i++){
    currentStreamingLocation.appendChild(updatedCurrentlyStream[i]);
    }
}