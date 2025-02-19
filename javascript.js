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

const input = document.getElementById("input");

function reverseString(str){
    return str.split("").reverse().join("");
}

function check(){
    const value = input.value;
    const reverse = reverseString(value);
    
    if(value === reverse){
        alert("P A L I N D R O M E")
    }else{
        alert("Not today!!!")
    }
    input.value = ""
}