// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. At each position of the grid 
// there is either a space or a "#" character. The characters should form a chessboard.

let size = 8;
let grid = "";
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if ((i + j) % 2 == 0) {
            grid += " ";
        } else {
            grid += "#";
        }
    }
    grid += "\n";
}
console.log(grid);

/*
Output:
# # # # 
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

/*
- variabel size untuk menyimpan ukuran papan (panjang dan lebar)
- outer loop untuk baris, inner loop untuk kolom
- jika jumlah baris dan kolom bernilai genap (habis dibagi 2), maka ditandai spasi
- jika jumlah baris dan kolom bernilai ganjil (tidak habis dibagi dua), maka ditandai "#" (hash)
*/

// for (let i = 1; i <= size; i++) {
//     let hash = "";
//     for (let j = 1; j <= 4; j++) {
//         if (i % 2 === 0) {
//             hash += " #";
//         } else {
//             hash += "# ";
//         }
//     }
//     console.log(hash);
// }