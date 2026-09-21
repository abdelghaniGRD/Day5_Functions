const describeAge = (age) => {
  let isAdult = age >= 18;

  let sentence;
  if (isAdult) sentence = "Adult";
  else sentence = "minor";

  console.log(`You Are a ${age} ${sentence}`);
};

describeAge(20);
