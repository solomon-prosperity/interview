const oneAway = (str1 , str2) => {
    let dif = 0
    if (str1 === str2) return true

    let lengthDiff = Math.abs(str1.length - str2.length)
    if (lengthDiff > 1) return false

    for (let i = 0; i < str1.length || i < str2.length;i++) {
        if (dif > 1 ) return false;
        if (str1.charAt(i) !== str2.charAt(i)) dif++
    }

    if (dif <= 1) return true
    else return false;
}

console.log(oneAway("pales" , "bale"))