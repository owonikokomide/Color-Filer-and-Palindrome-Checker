 
// Color filer

 const body = document.getElementsByTagName("body")[0];

 function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
}


// Palindrome checker

const input = document.getElementById("input");

function reverseString(str){
    return str.split("").reverse().join("");
}

function check(){
    const value = input.value;
    const reverse = reverseString(value);
    if(input.value == ""){
        alert("Please type something")
    }
    
   else if(value === reverse){
        alert("P A L I N D R O M E")
    }else{
        alert("Not today!!!")
    }
    input.value = ""
}

// Random Quote Generator 
const quotes = [
    "All you need in this life is ignorance and confidence; then success is sure.",
    "It is never too late to be what you might have been.",
    "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.",
    "Nothing is impossible, the word itself says 'I'm possible'!",
    "We must accept finite disappointment, but never lose infinite hope.",
    "Try not to become a man of success, but rather try to become a man of value.",
    "Every child is an artist; the problem is staying an artist when you grow up",
    "Dont think about making art, just get it done. Let everyone else decide if its good or bad, whether they love it or hate it. While they are deciding, make even more art",
    "Art is a collaboration between God and the artist, and the less the artist does the better.",
    "Be yourself; everyone else is already taken.",
    "So many books, so little time."
];

const usedIndex = new Set();
const quotesElement = document.getElementById("quotes");

function generateQuotes(){


    while(true){
        if(usedIndex.size >= quotes.length){
            usedIndex.clear()
        } 

        const randomIdx = Math.floor(Math.random() * quotes.length);

        if(usedIndex.has(randomIdx)) continue;

        const quote = quotes[randomIdx];
        quotesElement.innerHTML = quote;
        usedIndex.add(randomIdx)
        break
    }
    
}

// StopWatch

let secondElapse = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(values){
    return String(values).padStart(2, "0");
}

function setTimer(){
    const minute = Math.floor(secondElapse / 60);
    const second = secondElapse % 60;
    time.innerHTML = `${padStart(minute)} : ${padStart(second)}`;
}

function timer(){
    secondElapse++;
    setTimer();
}

function startWatch(){
    if(interval) stopWatch()
 interval = setInterval(timer, 1000);
}

function stopWatch(){
   clearInterval(interval);
}

function resetWatch(){
  stopWatch();
  secondElapse = 0;
  setTimer();
}