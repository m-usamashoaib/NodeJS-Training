console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Time");
for (let i = 0; i < 100; i++) {
    console.log(i);
}
console.timeEnd('Time');

console.info("Program Ended")