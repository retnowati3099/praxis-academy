let size = 8;
for (let i = 1; i <= size; i++) {
    let hash = "";
    for (let j = 1; j <= 4; j++) {
        if (i % 2 === 0) {
            hash += " #";
        } else {
            hash += "# ";
        }
    }
    console.log(hash);
}