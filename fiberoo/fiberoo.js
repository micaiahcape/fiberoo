function fib() {
  const finalArr = [0, 1];
  for (let i = 1; i < 49; i++) {
    const last = finalArr.length - 1;
    finalArr.push(finalArr[last] + finalArr[last - 1]);
  }
  return finalArr;
}

console.log(fib());

function numsToStrings(arr) {
  return _.map(arr, (element) => element.toString());
}

console.log(numsToStrings(fib()));

function numEvenNums(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      total++;
    }
  }
  return total;
}

console.log(numEvenNums(fib()));
