function toBinary(decimal) {
  const binaryArray = [];

  while (decimal / 2 !== 0) {
    remainder = decimal % 2;
    binaryArray.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  console.log(binaryArray);

  if (Math.abs(decimal / 2 == 0)) {
    remainder = decimal % 2;
    binaryArray.push(remainder);
  }

  binaryArray.reverse();
  const binary = binaryArray.join("");

  return binary;

}

toBinary(4);