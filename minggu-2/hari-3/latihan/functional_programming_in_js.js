// Functional programming adalah paradigma atau pola pemrograman 
// Contoh functional programming 

let meetups = [
    {name: "JS", isActive:true, members: 450},
    {name: "Angular", isActive: true, members: 900},
    {name: "Node", isActive: false, members: 900}
];

// 1. Array function
// Imperative --> berfokus pada mendeskripsikan bagaimana program beroperasi
let activeMeetups = [];
for(let i = 0; i < meetups.length; i++){
    let m = meetups[i];
    if(m.isActive){
        activeMeetups.push(m);
    }
}
console.log(activeMeetups);
// output:
// [
//     { name: 'JS', isActive: true, members: 450 },
//     { name: 'Angular', isActive: true, members: 900 }
//   ] 
let activeMeetupsFP = [];
activeMeetupsFP = (meetups.filter(
    (m) => {
        return m.isActive
    }
));

console.log(activeMeetupsFP);
// output:
// [
//     { name: 'JS', isActive: true, members: 450 },
//     { name: 'Angular', isActive: true, members: 900 }
//   ]

// 2. Function Chining
let sumFPChain = meetups.filter((m) =>{
    return m.isActive;
}).map((m) => {
    return m.members - (0.1 * m.members);
}).reduce((acc, m) => {
    return acc + m;
}, 0);
console.log(sumFPChain); // output: 1215

// 3. Side Effects
const scheduleMeetup = (date, place) => {
    meetups.date = date;
    meetups.place = place;
    if(meetups.members < 50){
        meetups.isActive = false;
    }
}

const publishMeetup = () => {
    if(meetups.isActive){
        meetups.publish = true;
    }
}

scheduleMeetup("today", "Indonesia");
publishMeetup();
console.log(meetups);
// output:
// [
//     { name: 'JS', isActive: true, members: 450 
//   },
//     { name: 'Angular', isActive: true, members: 900 },
//     { name: 'Node', isActive: false, members: 900 },
//     date: 'today',
//     place: 'Indonesia'
//   ]