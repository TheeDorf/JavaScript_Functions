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

function cartesianPlane (x,y){
   if  (x === 0 && y === 0){
    console.log(`this is the origin`)
   } else if (x === 0) {
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
cartesianPlane(0,2)
cartesianPlane(1,2)
cartesianPlane(-6,18)

// ex 4

function checkTriangle(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      return "Invalid triangle";
    } else if (side1 === side2 && side1 === side3) {
      return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles triangle";
    } else {
      return "Scalene triangle";
    }
  }

  console.log(checkTriangle (1,3,3))
  console.log(checkTriangle(1,1,2))
  console.log(checkTriangle(1,1,1))


//   ex 5

function dataUsage(planLimit, day, usage) {
    let daysLeft= 30 - day;
    let dataLeft= planLimit - usage;
    let averageDailyUsage = usage / day;
    let averageDailyRemaining= dataLeft/ daysLeft;
    
    if (usage>= planLimit){
        console.log(`You have used all of your data`);
    } else if (averageDailyUsage > averageDailyRemaining){
        console.log(`You are using too much data per day`)
    } else {
        console.log(`You still have data left to use`)
    }
   
}

console.log(dataUsage(100,15,56));
console.log(dataUsage(200,20,56));