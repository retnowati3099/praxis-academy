// 1. string literal
// string dapat dibuat menggunakan petik ganda atau petik tunggal.
let firstName = "Retno";
let lastName = 'Wati';

//string dapat juga dibuat menggunakan escape sequences
// hexadecimal escape sequences
// angka setelah \x diinterpretasikan sebagai angka hexsadesimal
console.log('\xA9'); // output: ©

// unicode escape sequences
// unicode escape sequences memerlukan setidaknya 4 digit heksadesimal diikuti \u
console.log('\u00A9'); // output: ©

// unicode code point escapes
console.log('\u{2F804}'); // output: 你
console.log('\uD87E\uDC04'); // output: 你

// 2. string object
const foo = new String('foo'); // membuat objek string
console.log(foo); // output: [String: 'foo']
console.log(typeof foo); // output: object

const firstString = '2 + 2'; //membuat nilai string literal
const secondString = new String('2 + 2'); // membuat objek string
console.log(eval(firstString)); // output: 4
console.log(eval(secondString));; //output: [String: '2 + 2']

// 3. menentukan panjang string
const hello = 'Hello, World!';
const helloLength = hello.length;
console.log(helloLength); // output: 13
console.log(hello[0]); //output: H
hello[0] = 'L'; // tidak berpengaruh karena string immutable

// 4. string multi-lines
console.log('string text line 1\n\
string text line 2');
/*
output:
string text line 1
string text line 2
*/
console.log(`string text line 1
string text line 2`);
/*
output:
string text line 1
string text line 2
*/

// 5. embedded expression
const five = 5;
const ten = 10;
console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.'); // output: Fifteen is 15 and not 20.
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`); // output: Fifteen is 15 and not 20.

// 6. date and time formatting
// objek Intl.DateTimeFormat bermanfaat untuk memformat tanggal dan waktu
// January 19, 2023 00.00.00 UTC:
const January192023 = new Date("2023-01-19");
const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
}

const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
console.log(americanDateTime(January192023)); // output: 01/19/23, 07:00 AM GMT+7

// 7. number formatting
// objek Intl.NumberFromat bermanfaat untuk membormat angka, contohnya  currencies
const gasPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 3
});
console.log(gasPrice.format(5.259)); // output: $5.259

// 8. collation
// objek Intl.Collator berguna untuk membandingkan dan sorting string
const names = ['Hochberg', 'Hönigswald', 'Holzman'];

// phonebook sort
const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');
console.log(names.sort(germanPhonebook.compare).join(', ')); // Hochberg, Hönigswald, Holzman

//dictionary sort
const germanDictionary = new Intl.Collator('de-DE-u-co-dict');
console.log(names.sort(germanDictionary.compare).join(', ')); //Hochberg, Holzman, Hönigswald