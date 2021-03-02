(()=>{"use strict";function e(e,t){var o=e+" "+t,s=document.createElement("div");s.classList.add("side-nav-section"),s.classList.add("tw-flex"),s.classList.add("tw-flex-column"),s.setAttribute("aria-label",o),s.setAttribute("role","group"),s.id=e;var d=document.createElement("div");d.classList.add("side-nav-header"),d.classList.add("tw-mg-1"),d.classList.add("tw-pd-t-05"),d.setAttribute("data-a-target","side-nav-header-expanded"),d.setAttribute("role","group"),s.appendChild(d);var r=document.createElement("h5");r.classList.add("same-font"),r.textContent=o.toUpperCase(),d.appendChild(r);var n=document.createElement("div");return n.classList.add("tw-relative"),n.classList.add("tw-transition-group"),s.appendChild(n),[s,n,e]}class t{constructor(e){this.dropzone=e,this.nodes=this.dropzone.children,this.selectedNode="",this.selectedNodePos=0;for(var t=0;t<this.nodes.length;t++)this.nodes[t].addEventListener("dragstart",(t=>{t.dataTransfer.setData("text",t.currentTarget.id),console.log("Dragstarted"),this.selectedNode=document.getElementById(t.currentTarget.id),console.log(this.selectedNode),e.removeChild(selectedNode)}));this.dropzone.addEventListener("dragover",(e=>{e.preventDefault(),console.log("Dragover"),this.whereAmI(e.clientY)})),this.dropzone.addEventListener("drop",(e=>{e.preventDefault(),console.log("Dropped on "+this.selectedNodePos),console.log(this.selectedNode),1==this.selectedNodePos&&(this.selectedNodePos=0),this.dropzone.insertBefore(this.selectedNode,this.dropzone.children[this.selectedNodePos]),this.selectedNodePos=0}))}establishNodePostions(){for(var e=0;e<this.nodes.length;e++)this.element=document.getElementById(this.nodes[e].id),this.position=this.element.getBoundingClientRect(),this.yTop=this.position.top,this.yBottom=this.position.bottom,this.yCenter=this.yTop+(this.yBottom-this.yTop)/2,this.nodes[e].yPos=this.yCenter}whereAmI(e){this.establishNodePostions(),this.nodeAbove=void 0;for(var t=0;t<this.nodes.length;t++)this.nodes[t].yPos<e&&(this.nodeAbove=document.getElementById(this.nodes[t].id),this.selectedNodePos=t+1);null==typeof nodeAbove&&(this.selectedNodePos=0),console.log(this.selectedNodePos)}setItem(e){this.dropzone.appendChild(e),e.addEventListener("dragstart",(e=>{e.dataTransfer.setData("text",e.target.id),console.log("dragstart"),this.selectedNode=document.getElementById(e.target.id),console.log(this.selectedNode),setTimeout((()=>{this.dropzone.removeChild(this.selectedNode)}),0)}))}createFolderDropZone(e){e.addEventListener("dragover",(e=>{e.preventDefault(),console.log("Dragover"),this.whereAmI(e.clientY)})),e.addEventListener("drop",(t=>{t.preventDefault(),console.log("Dropped on "+this.selectedNodePos),console.log(this.selectedNode),1==this.selectedNodePos&&(this.selectedNodePos=0),e.insertBefore(this.selectedNode,e.children[0]),this.selectedNodePos=0}))}}function o(e){console.log("starting isLive");var t="#"+e.id;try{return null!=document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#FollowedChannels").querySelector("#organizer").querySelector(".tw-relative").querySelector("#dropZoneMain").querySelector(t).querySelector("a").querySelector(".tw-ellipsis").querySelector(".side-nav-card__live-status").querySelector(".tw-align-items-center").querySelector(".ScChannelStatusIndicator-sc-1cf6j56-0")}catch(e){return!1}}!function(){var e=document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-show-more-toggle__button").querySelector('[data-a-target="side-nav-show-more-button"]'),t=0;do{e.click(),t+=1}while(t<=100);setTimeout((function(){document.querySelectorAll("#sideNav .side-bar-contents .tw-relative .tw-transition .side-nav-card .side-nav-card__link").forEach((e=>{console.log("Cleaning"),e.removeAttribute("data-a-id")}))}),1e3)}();var s=document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-flex-grow-1");s.id="FollowedChannels";var[d,r,n]=e("organizer","channel"),[l,a,i]=e("currently","streaming");setTimeout((function(){var e=function(e){var t=document.createElement("div");t.id="dropZoneMain",t.classList.add("space");var o=0;return e.forEach((e=>{e.setAttribute("draggable","true"),e.className="",e.style="";var s=document.createElement("div");s.className="side-nav-card tw-relative ffz--side-nav-card-offline node",s.appendChild(e),s.setAttribute("draggable","true"),s.classList.add("node"),s.id="stream"+o,t.appendChild(s),o+=1})),t}(document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".tw-relative").querySelectorAll(".tw-transition a"));r.appendChild(e);var n=document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-section");s.insertBefore(l,n),s.insertBefore(d,n),n.remove();var i=document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#FollowedChannels").querySelector("#dropZoneMain"),c=new t(i),u=(document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector(".side-nav-show-more-toggle__button").querySelector('[data-a-target="side-nav-show-more-button"]'),document.querySelector("#root").querySelector(".tw-absolute")),h=document.createElement("div");h.id="TFO",h.classList.add("ffz-dialog"),h.classList.add("ffz-main-menu"),h.classList.add("tw-elevation-3"),h.classList.add("tw-c-background-alt"),h.classList.add("tw-c-text-base"),h.classList.add("tw-border"),h.classList.add("tw-flex"),h.classList.add("tw-flex-nowrap"),h.classList.add("tw-flex-column");var v=document.createElement("header");v.classList.add("tw-c-background-base"),v.classList.add("tw-full-width"),v.classList.add("tw-align-items-center"),v.classList.add("tw-flex-nowrap");var m=document.createElement("h3");m.innerHTML="TFO";var p=document.createElement("div"),g=document.createElement("button");g.classList.add("tw-button-icon"),g.classList.add("tw-mg-x-05"),g.classList.add("tfo-button"),g.innerHTML="Close Window",g.onclick=function(){document.querySelector("#root").querySelector(".tw-absolute").querySelector("#TFO").remove()},v.appendChild(m),v.appendChild(p),v.appendChild(g);var y=document.createElement("section");y.classList.add("tw-border-t"),y.classList.add("tw-full-height"),y.classList.add("tw-full-width"),y.classList.add("tw-flex"),y.classList.add("tw-flex-nowrap"),y.classList.add("tw-overflow-hidden");var f=document.createElement("div"),w=document.createElement("button"),L=document.createElement("input");L.value="New Folder",w.innerHTML="Create New Folder",function(e,t,o,s){e.onclick=function(){console.log("creating a folder");var e=document.createElement("div"),d=document.createElement("div");d.setAttribute("draggable","true"),d.classList.add("collapsible"),d.classList.add("folder");var r=t.value;d.innerHTML=r;var n=document.createElement("div");n.classList.add("content");var l=document.createElement("button");l.classList.add("deleteButtonFolder"),l.onclick=function(){for(e.remove();null!=n.getElementsByClassName("node");){var t=n.getElementsByClassName("node");s.appendChild(t[0])}},d.addEventListener("click",(function(){this.classList.toggle("active");var e=this.children[0];"block"===e.style.display?e.style.display="none":e.style.display="block"})),d.appendChild(n),e.appendChild(d),e.appendChild(l);var a=document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#FollowedChannels").querySelector("#organizer").querySelector(".tw-relative");console.log(a),a.insertBefore(e,a.children[0]),o.createFolderDropZone(n)}}(w,L,c,e),f.appendChild(L),f.appendChild(w),y.appendChild(f),h.appendChild(v),h.appendChild(y);var S=document.querySelector("#root").querySelector(".tw-flex").querySelector(".top-nav").querySelector(".tw-justify-content-end"),q=document.createElement("div");q.id="TFOButton",q.classList.add("tw-align-self-center"),q.classList.add("tw-flex-grow-0"),q.classList.add("tw-flex-nowrap"),q.classList.add("tw-flex-shrink-0"),q.classList.add("tw-mg-x-05");var b=document.createElement("button");b.innerHTML="TFO",q.appendChild(b),S.prepend(q),b.onclick=function(){u.appendChild(h)},setInterval((function(){!function(e){for(var t=function(){for(var e=[],t=document.querySelector("#sideNav").querySelector(".side-bar-contents").querySelector("#FollowedChannels").querySelector("#organizer").querySelector(".tw-relative").getElementsByClassName("node"),s=0;s<t.length;s++)if(o(t[s])){var d=t[s].cloneNode(!0);d.setAttribute("draggable","false"),d.id="",console.log(d),e.push(d)}return e}();e.firstChild;)console.log("deleting"),e.removeChild(e.lastChild);for(var s=0;s<t.length;s++)e.appendChild(t[s])}(a)}),5e3)}),1e3)})();