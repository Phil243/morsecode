
// create way to accept input
let message = 'if only i knew what i was doing. heck, heck oh boy.';

// define translator list of character-dot/dash
const greek = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '.'];
const dotdash = [' .-', ' -...', ' -.-.', ' -..', ' .', ' ..-.', ' --.', ' ....', ' ..', ' .---', ' -.-', ' .-..', ' --', ' -.', ' ---', ' .--.', ' --.-', ' .-.', ' ...', ' -', ' ..-', ' ...-', ' .--', ' -..-', ' -.--', ' --..', ' ', ' //'];
const translated = [];


// create loop to iterate through each input character
for (i = 0; i <= message.length; i++){
    if (greek.includes(message[i])){
       // console.log(greek.indexOf(message[i]))
        translated.push(dotdash[greek.indexOf(message[i])])
    }
    // if (dotdash.includes(message[i])){
    //    // console.log(dotdash.indexOf(message[i]))
    //     translated.push(greek[dotdash.indexOf(message[i])])
    // }
};
console.log(translated.join(''));
// find a way to revere translate, avoid ambiguity
let morseMessage = '... --- ...';
const isolatedDotDash = morseMessage.split(' ');
console.log(isolatedDotDash);