
function countvowel(str) {

 let count = 0;
    const vowels =["a", "e", "i", "o", "u"] ;

str = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) > -1) {
            count++;
        }
    }

    return count;
}

console.log(countvowel("hello world"));