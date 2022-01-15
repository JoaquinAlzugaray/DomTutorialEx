let today = new Date()
let date = {year : today.getFullYear()} 
console.log(date);

let myString = "<p>Hello!</p> <strong>My friend,</strong> we are in the year" +" "+ date.year
document.write(myString);