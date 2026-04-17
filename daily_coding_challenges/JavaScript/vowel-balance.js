function isBalanced(s) {
  s = s.toLowerCase().replace(/\s+/g, "");

  const vowels = ["a", "e", "i", "o", "u"];

  let s1 = s.slice(0, s.length / 2);
  let s2;

  let n1 = 0;
  let n2 = 0;

  if (s.length % 2 === 1) {
    s2 = s.slice(s.length / 2 + 1);
  }

  else {
    s2 = s.slice(s.length / 2);
  }

  for (let char of s1) {
    console.log(char);
    if (vowels.includes(char)) {
      n1 += 1;
    }
  }

  for (let char of s2) {
    if (vowels.includes(char)) {
      n2 += 1
    }
  }

  return n1 === n2;
}