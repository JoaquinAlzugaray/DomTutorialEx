let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.createElement("li")
	elem.innerHTML = "Forth element"
	let loc = document.querySelector('#myList')
	loc.appendChild(elem)

});

//let elem = document.createElement("div");
	//elem.innerHTML = "Hello World";
	//document.body.appendChild(elem);

	// let elem = document.ul.innerHTML += "<li>Forth element</li>"