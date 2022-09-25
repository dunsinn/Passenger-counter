
let count = 0; 
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(countEl);
console.log(saveEl); 

 function increment() {
    console.log("The button was clicked");
    count += 1;
    countEl.innerText = count;
 }

 function save() {
    let update = count + " / ";
    saveEl.textContent += update;
    countEl.textContent = 0;
    count = 0;
 }