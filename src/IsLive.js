export function isLive(stream){
      // - a - tw-ellipsis - side-nav-card__live-status - tw-align-items-center - ScChannelStatusIndicator
    console.log("starting isLive");
    var id = '#' + stream.id;
    //console.log(id);
    try{
      var checker = document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#FollowedChannels").querySelector("#organizer").querySelector(".tw-relative").querySelector("#dropZoneMain").querySelector(id).querySelector("a").querySelector(".tw-ellipsis").querySelector(".side-nav-card__live-status").querySelector(".tw-align-items-center").querySelector(".ScChannelStatusIndicator-sc-1cf6j56-0");
      return checker != null;

    } catch(error){
      return false;
    }
  
}