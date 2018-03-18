let $random = range => {
    switch (typeof range) {
    case 'string': return range[Math.floor(Math.random() * range.length)];
    case 'number': return Math.round(Math.random() * range);
    default: throw new Error(`${range} is invalid`);
    }
}

const UPPER = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const LOWER = "アイウエオカキクエコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
console.log($random(`${UPPER}${LOWER}`))
