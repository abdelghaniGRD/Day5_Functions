// not fully understand the requirements
let me = "outer message";

function outerFunction() {
  let me = "inner block";
  if (true) {
    return () => console.log(me);
  }
}

const counter = outerFunction();

counter();
