const compressString = (str) => {
    let output = '';
    let count = 1;
    for (let i  = 0; i < str.length; i++) {
        let cur = str[i];
        let next = str[i + 1];
        if (cur === next) {
            count++
        } else {
            output += cur + String(count);
            count= 1
        }
    }

    return output.length < str.length ? output : str
}

console.log(compressString('aabcccccdddddd'))