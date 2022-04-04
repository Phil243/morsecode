
// create way to accept input
let message = 'sos, s o s';

// define translator list of character-dot/dash
const greek = ['s', 'o', ];
const dotdash = ['...', '---', ];
const translated = [];


// create loop to iterate through each input character
for (i = 0; i <= message.length; i++){
    if (greek.includes(message[i])){
        console.log(greek.indexOf(message[i]))
        translated.push(dotdash[greek.indexOf(message[i])])
    }
};
console.log(translated);
// console.log(translated);



// for array greek[index] instead return dotdash[index]
// for array dotdash[index] instead return greek[index]

// give translated output