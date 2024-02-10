
for (let i = 0; i < 10; i++) {
  //console.log(i)
//check if multiple of 3
    if (i % 3 === 0) {
        console.log('FIZZ');
    }
//check if multiple of 5
    else if (i % 5 === 0) {
        console.log('BUZZ');
    }
//Check if multiple of 3 and 5
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    }
    else {
    console.log(i);
}

}