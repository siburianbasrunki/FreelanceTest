function isPalindrome(x) {
  const str = x.toString();

  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

const x = 22;
const result = isPalindrome(x);
console.log(result);
