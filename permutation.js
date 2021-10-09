const arePermutations = (str1 , str2) => {
    if (str1.length != str2.length) 
    return false
    let char1 = str1.split('')
    let char2 = str2.split('')

    char1.sort();
    char2.sort();

    for (let i = 0; i < str1.length; i++) {
        if (char1[i] != char2[i]) 
        return false
    }
    return true
}

arePermutations('john' , 'kiev')?console.log('Yes'):console.log('No')

