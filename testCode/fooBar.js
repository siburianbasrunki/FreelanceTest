function fooBar(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("catKitty");
    } else if (i % 3 === 0) {
      console.log("cat");
    } else if (i % 5 === 0) {
      console.log("kitty");
    } else {
      console.log(i);
    }
  }
}

const n = 15;
fooBar(n);
