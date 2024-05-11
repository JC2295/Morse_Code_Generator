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

let userInputStr = prompt("Enter Text:");

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

alert(outputMorseStr);




