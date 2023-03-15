console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
    if (count < 1){
        console.log('Please enter a positive number.');
        return
    }
}


for (let i = 1; i <= 50; i++){
    if (i % 2 !==0){
        console.log(i);
    }
}


// Exercise 2 Section

function checkAge(userName, age){


    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    let aboveSixteen = `Congrats ${userName}, you can drive!`

if (age > 16) {
    console.log(aboveSixteen);
} 
else {
    console.log(belowSixteen);
}
}
checkAge("AJ",32)
checkAge("Ladd",14)


// ex 3

function checkPoint (x,y){
   if  (x === 0 && y === 0){
    console.log(`this is the origin`)
   }
   else if (x===0){
    console.log(`(${x},)`)
   }
}