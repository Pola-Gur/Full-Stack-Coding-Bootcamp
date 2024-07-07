// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let star = '';

for (let i=0; i<6; i++) {
    star += '*;'
    console.log(star);
}

// or
 for (let p=0; p<6; p++) {
    const countStars = p+1
    let rowStars = ''
    for (let j=0; j<countStars; j++) {
        rowStars += '*'
    }
    console.log(rowStars)
 }