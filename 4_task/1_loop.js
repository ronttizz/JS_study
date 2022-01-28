// Loop Assignments (Don’t use arrays)

// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (let i = 1; i < 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 …

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
    console.log(100 - i);
  }
}

// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let distance, time;
while (distance != 0) {
  distance = prompt("Give distance", "Distance");
  if (distance == 0) {
    break;
  }
  time = prompt("Give time", "Time");
  console.log("Average speed " + distance / time);
}

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let evenNumbers = 0;
for (let i = 0; i < 20; i++) {
  let number = prompt("Give a number");
  if (number % 2 == 0) {
    evenNumbers++;
  }
}
console.log(evenNumbers);

// 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let total = 0;
let count = 0;
let number;

do {
  number = prompt("Give a number");
  total += Number(number);
  if (number != 0) {
    count++;
  }
} while (Number(number) !== 0);
console.log(total / count);

// 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let i = 0;
let total = 0;
while (i < 5) {
  total += Number(prompt("Give a number", "Give a number"));
  i++;
}
console.log("The average of the numbers were " + total / i);

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let total = Number(prompt("Give a number"));
let count = 0;
let answer = "";
do {
  total += Number(prompt("Give a number"));
  count++;
} while (
  (answer = prompt("Do you want to continue giving numbers?") === "n" || "N")
);
console.log("The average of the numbers were: " + total / count);

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
