let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.body.innerHTML += "<div>Hello World</div>"
	elem.style.backgroundColor = 'yellow'
});

//let elem = document.createElement("div");
	//elem.innerHTML = "Hello World";
	//document.body.appendChild(elem);
	//elem.style.backgroundColor = 'yellow'

	