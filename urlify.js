const urlify = (str) => {
   const urlified = str.split(" ").join("%20")
   console.log(urlified)
}

urlify('this string will be urlified')