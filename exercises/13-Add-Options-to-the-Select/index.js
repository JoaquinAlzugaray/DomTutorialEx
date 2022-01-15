window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
	let loca = document.querySelector('#mySelect')
	for (let i =0; i<countries.length; i++) {
		let paises = countries[i]
		let elem = document.createElement("option")
		elem.innerHTML = paises
		loca.appendChild(elem)
		
		elem.addEventListener("click", function(){
			let al = alert('hello')
			let elem2 = document.createElement("option")
			elem2.innerHTML = al
			loca.appendChild(elem2)
		})
	}
};






//let button = document.querySelector("#superDuperButton");
//button.addEventListener("click", function() {
	//your code here
//	let elem = document.createElement("li")
//	elem.innerHTML = "Forth element"
//	let loc = document.querySelector('#myList')
//	loc.appendChild(elem)
//});

// let elem = document.ul.innerHTML += "<li>Forth element</li>"

//let loca2 = document.getElementsByName(paises)
//	loca2.addEventListener ("click", function() {
//		console.log(alert('Hola'))
//	})