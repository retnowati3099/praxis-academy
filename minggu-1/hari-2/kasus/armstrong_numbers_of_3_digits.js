// Write a JavaScript program to find the armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of 
// the cubes of its digits is equal to the number itself. For example, 371 is 
// an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

for (let i = 1; i <= 9; i++){  
    for(let j = 0; j <= 9; j++){
        for(let k = 0; k <= 9; k++){
            let pangkat_3 = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
            let jumlah = i * 100 + j * 10 + k;
            if(pangkat_3 == jumlah){
                console.log(jumlah);
            }   
        }
    }
}