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


