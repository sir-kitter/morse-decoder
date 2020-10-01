const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const morse_to_binary = (morse) => {
    return '00'.repeat(5 - morse.length) + (morse.split('').reduce((binary, char) => binary + (char === '.' ? '10' : '11'), ''))
}

let binary_to_letter = { '**********' : ' ' }
for (const [morse, letter] of Object.entries(MORSE_TABLE)) {
    binary_to_letter[morse_to_binary(morse)] = letter
}

function decode(expr) {
    return expr.match(/.{1,10}/g).reduce((result, binary) => result + binary_to_letter[binary], '')
}

module.exports = {
    decode
}