<<<<<<< HEAD
// menggunakan 1 for loop
let hash1 = "#";
for (let i = 0; i < 7; i++) {
    console.log(hash1);
    hash1 += "#";
}

// menggunakan 1 for loop
let hash2 = "";
for (let i = 0; i < 7; i++) {
    hash2 += "#";
    console.log(hash2);
}

// menggunakan nested for
let hash4 = "";
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++) {
        hash4 += "#";
    }
    hash4 += "\n";
}
console.log(hash4);

// menggunakan nested for loop
for (let i = 1; i <= 7; i++) {
    let hash3 = "";
    for (let j = 1; j <= i; j++) {
        hash3 += "#";
    }
    console.log(hash3);
}


/*
output:
#
##
###
####
#####
######
#######
#
##
###
####
#####
######
#######
#
##
###
####
#####
######
#######

#
##
###
####
#####
######
#######
=======
// menggunakan 1 for loop
let hash1 = "#";
for (let i = 0; i < 7; i++) {
    console.log(hash1);
    hash1 += "#";
}

// menggunakan 1 for loop
let hash2 = "";
for (let i = 0; i < 7; i++) {
    hash2 += "#";
    console.log(hash2);
}

// menggunakan nested for
let hash4 = "";
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++) {
        hash4 += "#";
    }
    hash4 += "\n";
}
console.log(hash4);

// menggunakan nested for loop
for (let i = 1; i <= 7; i++) {
    let hash3 = "";
    for (let j = 1; j <= i; j++) {
        hash3 += "#";
    }
    console.log(hash3);
}


/*
output:
#
##
###
####
#####
######
#######
#
##
###
####
#####
######
#######
#
##
###
####
#####
######
#######

#
##
###
####
#####
######
#######
>>>>>>> 4d061c6d08a875d5c15cf58a04af24671a74b2c1
*/