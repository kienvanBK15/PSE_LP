function on() {
  	document.getElementById("overlay").style.display = "flex";
  	const modal = document.getElementById('overlay');
  	const b1 = document.getElementById('submit-button');
  	window.onclick = function(event) {
  		if (event.target == modal) {
    	modal.style.display = "none";
  		}
  		if (event.target == b1) {
    	modal.style.display = "none";
  		}
	}
}

function off() {
  	document.getElementById("overlay").style.display = "none";
}

function submitButtonClicked() {
	var tt = document.getElementById('sttt').value;
	var subject = document.getElementById('stsubject').value;
	document.getElementById('demo1').innerHTML = tt;
	document.getElementById('demo2').innerHTML = subject;
	if (tt != undefined || subject != undefined) {
		document.getElementById('user-status').style.display = "block";
	}
	
	// var tt = document.getElementById('sttt').value;
	// var subject = document.getElementById('stsubject').value;
	// var node = document.createElement("div");
	// var img = document.createImageBitmap("pic/profile-pic.png");
	// var text = document.createTextNode("Alo");
	// node.appendChild(text);
	// document.getElementById("user-status").appendChild(node);
}

function editStatus() {
	const modal = document.getElementById('overlay');
	const edit = document.getElementById('demo4');
	if (event.target == edit) {
    	modal.style.display = "flex";
  	}
}


