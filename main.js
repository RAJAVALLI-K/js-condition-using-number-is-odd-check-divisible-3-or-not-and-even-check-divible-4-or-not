// 3-Check if the number is even or odd, and then if it is even, 
// whether it is divisible by 4 or not, and if it is odd, whether it is divisible by 3 or not .

let number = parseInt(prompt('Enter a number'));
if (number % 2 == 0) {
    if (number % 4 == 0) {
        console.log(' 4 divisible');
    }
    else {
        console.log('not divisible');
    }
}
else if (!(number % 2 == 0)) {
    if (number % 3 == 0) {
        console.log(' 3 divisible');
    }
    else {
        console.log('not divisible');
    }
}