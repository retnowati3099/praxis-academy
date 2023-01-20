// regular expressions
// 1. membuat regular expression
// menggunakan regular expression literal
const re = /ab+c/;
console.log(re);

// memanggil fungsi constructor dari object RegExp
const reex = new RegExp('ab+c');
console.log(reex);

// 2. menggunakan regular expressions dalam JavaScript
const myRe = /d(b+)d/g;
console.log(myRe.exec('cdbbdbsbz')); // [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]
console.log('cdbbdbsbz'.match(myRe)); // output: [ 'dbbd' ]

const myReex = new RegExp('d(b+)d', 'g');
console.log('cdbbdbsbz'.match(myReex)); // output: [ 'dbbd' ]

// membuat regular expression yang mencari satu atau lebih karakter yang diikuti oleh spasi
const reg = /\w+\s/g;
const str = 'fee fi fo fum';
const myArray = str.match(reg);
console.log(myArray); // [ 'fee ', 'fi ', 'fo ' ]

// menggunakan global search flag dengan exec()