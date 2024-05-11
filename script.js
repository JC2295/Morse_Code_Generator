let alphaNumStr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let alphaNumArr = alphaNumStr.split("");

console.log(alphaNumArr);

let morseNumArr = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."];

console.log(morseNumArr);

let morseAlphaArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
"--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

console.log(morseAlphaArr);

let morseAlphaNumArr = morseNumArr.concat(morseAlphaArr);

console.log(morseAlphaNumArr);

//let userInputStr = prompt("Enter Text:");

//Getting user input

let textBox = document.querySelector("#textBox");

let genBtn = document.querySelector("#genBtn");

genBtn.addEventListener("click", generateMorse);

function generateMorse(){

    let userInputStr = textBox.value;

    let userInputArr = userInputStr.toUpperCase().trim().split("");

    let outputMorseArr = [];

    for(let i = 0; i < userInputArr.length; i++){
        for(let j = 0; j < 36; j++){
            if(userInputArr[i] === alphaNumArr[j]){
                outputMorseArr.push(morseAlphaNumArr[j]);
            }
        }
    }

    let outputMorseStr = outputMorseArr.join(" ");

    let morseBox = document.querySelector("#morseBox");

    morseBox.innerText = outputMorseStr;

};


