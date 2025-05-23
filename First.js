function countBs(size, letter) {
    let counted = 0;
    for (i = 0; i < size.length; i++) {
        if (size[i] == letter) {
            counted += 1;
        }
    }
    return counted;
}

function countChar(size) {
    return countBs(size, "f");
}
console.log(countBs("aafkk", "k"));
console.log(countChar("aawdfwf"));      