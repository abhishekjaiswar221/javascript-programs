const swapNumber = () => {
  let a = 77;
  let b = 93;
  console.log("Value before swap");
  console.log("a = " + a);
  console.log("b = " + b);

  console.log("Value after swap");
  a = a + b; // 77+93=170
  b = a - b; // 170-93=77
  a = a - b; // 170-77=93
  console.log("a = " + a);
  console.log("b = " + b);
};

swapNumber();
