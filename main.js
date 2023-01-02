let countInt = document.getElementById("count-int")
let incrementBtn = document.getElementById("increment-btn")
let previousEnrty = document.getElementById("previous-entry")

let count = 0;

function increment(){
    count++;
    countInt.textContent = count;
    countInt.style.color = "green"

}
function reset(){
    count = 0
    countInt.textContent = 0
    countInt.style.color = "black"
    previousEnrty.textContent = "Previous Entries:"
}
function save(){
    previousEnrty.textContent += count + "-"
}

