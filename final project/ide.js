// will run this function whenever the IDE button is pressed
function ide() {
    //clear default box
    document.getElementById("output").value = "" + "\n";
	document.getElementById("output").readOnly = false;
	


    output("<span style='color: blue'>< lol ></span>");
	output("<span style='color: magenta'>print</span> <span style='color: green'> (derp)</span> <span style='color: red'>;</span>");
	output("<span style='color: magenta'>print </span> <span style='color: green'> (derpity)</span>");
	output("<span style='color: blue'> < / lol > </span>");
	
	output("");
	output("<span style='color: blue'> < mathz > </span>");
	output("<span style='color: magenta'>addition =</span> <span style='color: brown'> plus</span>");
	
	output("<span style='color: orange'> 0 + 5 = 5</span>");
	output("<span style='color: blue'> < / mathz > </span>");

    function output(text) {
        document.getElementById("output").innerHTML += text + "<br>";
    }
}