let $random = range => {
    switch (typeof range) {
    case 'string': return range[Math.floor(Math.random() * range.length)];
    case 'number': return Math.round(Math.random() * range);
    default: throw new Error(`${range} is invalid`);
    }
}

const UPPER = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const LOWER = "アイウエオカキクエコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const ANSWER = [
    'a',
    'i',
    'u',
    'e',
    'o',
    'ka',
    'ki',
    'ku',
    'ke',
    'ko',
    'sa',
    'shi',
    'su',
    'se',
    'so',
    'ta',
    'chi',
    'tsu',
    'te',
    'to',
    'na',
    'ni',
    'nu',
    'ne',
    'no',
    'ha',
    'hi',
    'fu',
    'he',
    'ho',
    'ma',
    'mi',
    'mu',
    'me',
    'mo',
    'ya',
    'yu',
    'yo',
    'ra',
    'ri',
    'ru',
    're',
    'ro',
    'wa',
    'wo',
    'n'
]
let readline = require('readline');

let bot = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let range = `${UPPER}${LOWER}`;
let ask = question => {
    bot.question(`${question}\n`, read => {
        let answer = ANSWER[range.indexOf(question) % ANSWER.length];
        if (answer == read) {
            return ask($random(range))
        } else {
            console.log(`answer is ${answer}`)
            bot.close();
        }
    });
}
ask($random(range))

