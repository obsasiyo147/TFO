import { isLive } from "./IsLive";

export function checkList(){
    var holder = [];
    var checkList = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#FollowedChannels").querySelector("#organizer").querySelector(".tw-relative").getElementsByClassName("node");
    // console.log(checkList);
    for(var i = 0; i < checkList.length; i++){
        if(isLive(checkList[i])){
        //    console.log(checkList[i]);
        var clone = checkList[i].cloneNode(true);
        clone.setAttribute("draggable", "false");
        clone.id = "";
        console.log(clone);
        holder.push(clone);
        }
    }

    // console.log(currentlyLive);    
    
   return holder;
}