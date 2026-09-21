for (let i = 0; i <= 2; i++) {
  console.log("hello");
}

console.log(i);
//we cannot access i because of the scope rules, i is defined inside the
//for loop and we cant access it from outside,
// if we need it to access it from outside we should declare it globaly
