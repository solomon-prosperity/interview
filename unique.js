const isUnique = (str) => {
   if (typeof str !== 'string') return false
   for (let i = 0; i < str.length; i++) {
           if (str.toLowerCase().lastIndexOf(str[i]) !== i) {
          return false;
       }
   }
   return true;

}

console.log(isUnique("youverify"))






