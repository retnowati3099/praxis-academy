let fruitType = 'Bananas'; // deklarasi variable fruitType dan inisialisasi nilainya dengan 'Bananas'
switch (fruitType) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Apples':
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas':
        console.log('Bananas are $0.48 a pound.');
        break;
    case 'Cherries':
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Mangoes':
        console.log('Mangoes are $0.56 a pound.');
        break;
    case 'Papayas':
        console.log('Papayas are $2.79 a pound.');
        break;
    default:
        console.log(`Sorry, we are out of ${fruitType}.`)
}
console.log("Is there anythink else you'd like?")