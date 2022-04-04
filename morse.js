
// create way to accept input
let message = 'sos, sos';

// define translator list of character-dot/dash
const greek = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '/'];
const dotdash = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '/', ' '];
const translated = [];


// create loop to iterate through each input character
for (i = 0; i <= message.length; i++){
    if (greek.includes(message[i])){
       // console.log(greek.indexOf(message[i]))
        translated.push(dotdash[greek.indexOf(message[i])])
    }
    if (dotdash.includes(message[i])){
       // console.log(dotdash.indexOf(message[i]))
        translated.push(greek[dotdash.indexOf(message[i])])
    }
};
console.log(translated);
// console.log(translated);



// for array greek[index] instead return dotdash[index]
// for array dotdash[index] instead return greek[index]

// give translated output