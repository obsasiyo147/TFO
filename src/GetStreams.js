export function getStreams(streams){
    // putting varies attributes and moving follwed to created div
        var list = document.createElement("div");
        list.id = "dropZoneMain";
        list.classList.add("space");
        var number = 0;

        streams.forEach((stream) => {
            // Stream info
            stream.setAttribute("draggable", "true");
            stream.className = '';
            stream.style = "";

        
            var div2 = document.createElement("div");
            div2.className = 'side-nav-card tw-relative ffz--side-nav-card-offline node';
            div2.appendChild(stream)

            // // List info
            div2.setAttribute("draggable", "true");
            div2.classList.add("node");
            div2.id = "stream" + number;

            // adding to html
            list.appendChild(div2);
            number += 1;
        });

        return list;
}