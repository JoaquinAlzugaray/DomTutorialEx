// your code here
let element = document.querySelector("#secondElement");
//console.log(element);
let element2 = element.parentNode
//console.log(element2);
element2.removeChild(element)
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector
