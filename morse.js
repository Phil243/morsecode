let message = 'a wizard is never late, nor is he early.';
// a simple way to accept/define a message

const latin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '.'];
const dotDash = [' .-', ' -...', ' -.-.', ' -..', ' .', ' ..-.', ' --.', ' ....', ' ..', ' .---', ' -.-', ' .-..', ' --', ' -.', ' ---', ' .--.', ' --.-', ' .-.', ' ...', ' -', ' ..-', ' ...-', ' .--', ' -..-', ' -.--', ' --..', ' ', ' /'];
const translated = [];
// defines 3 arrays.
// one for the latin alphabet,
// one for the morse alphabet,
// one left blank, for the result

for (i = 0; i <= message.length; i++){
    if (latin.includes(message[i])){
        translated.push(dotDash[latin.indexOf(message[i])])
    }
};
// creates a loop to iterate through each input character,
// if it matches any string within 'latin', it finds the index,
// and fetches the string from 'dotdash' with the same index,
// then parses it's content into the new array 'translated'.
// note: this is a direct 'translation' from array 'latin' into 'dotdash' by index,
//       hence the order of the strings is important.

console.log(translated.join(''));
// console output:  .-  .-- .. --.. .- .-. -..  .. ...  -. . ...- . .-.  .-.. .- - .  -. --- .-.  .. ...  .... .  . .- .-. .-.. -.-- /

let morseMessage = '.... .  .- .-. .-. .. ...- . ...  .--. .-. . -.-. .. ... . .-.. -.--  .-- .... . -.  .... .  -- . .- -. ...  - --- /';
const isolatedDotDash = morseMessage.split(' ');
// creates a new array 'isolatedDotDash' to store the morse input without spaces.
// storing the morse-code as 'strings' in an array was necessary,
// in order to avoid the ambiguity of '...' being translated into 'eee' instead of 's'.
// i thought about ordering the 'dotDash' array with decreasing complexity,
// in an attempt to have the longest morse-parts be translated first, in chunks,
// but was hoping the array solution would be less prone to error

const noSpaceDotDash = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '', '/'];
const revTranslated = [];

for (i = 0; i <= isolatedDotDash.length; i++){
    if (noSpaceDotDash.includes(isolatedDotDash[i])){
        revTranslated.push(latin[noSpaceDotDash.indexOf(isolatedDotDash[i])])
    }
}
console.log(revTranslated.join(''));
// console output: he arrives precisely when he means to.


// this was tailored to look 'passable' when logging into console,
// a foolish endeavour, i know! Chances are implementing it somewhere
// useful might allow edits to cut the spaces in the dotDash array
// and thus void the use of 'revDotDash'