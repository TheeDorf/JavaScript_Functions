console.log("Hello World!\n==========\n");

// Exercise 1 Section

function printOdds(count) {
    if (count < 1) {
      console.log("Error: Count must be a positive integer.");
      return;
    }
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    
  }
printOdds(51)


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
   else if (x === 0) {
    console.log(`(${x}, ${y}) is on the y axis`);
  } else if (y === 0) {
    console.log(`(${x}, ${y}) is on the x axis`);
  } else if (x > 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 1`);
  } else if (x < 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 2`);
  } else if (x < 0 && y < 0) {
    console.log(`(${x}, ${y}) is in Quadrant 3`);
  } else if (x > 0 && y < 0) {
    console.log(`(${x}, ${y}) is in Quadrant 4`);
  }
}
checkPoint(0,2)
checkPoint(1,2)
checkPoint(-6,18)