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


function correctAnswer(){
  var win = document.getElementById("dancing-cat");
  //show dancing cat;
  //say congradulations;
  	if(win.style.display === "block") {
    		win.style.display = 'none';
		//text.innerHTML = "show";
  	}
	else {
		win.style.display = 'block';
		//text.innerHTML = "hide";
	}
}