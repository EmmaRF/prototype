//from original html
function allowDrop(ev) {
    ev.preventDefault();
}

//from original html
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//from original html
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}//from original html ^
