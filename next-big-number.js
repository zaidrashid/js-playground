// old and wrong implementation
function _nextBigger(n) {
  //your code here
  console.log(n);
  const nArr = n.toString().split("");
  if (nArr.length === 1) {
    return -1;
  }
  if (nArr.every(v => v === nArr[1])) {
    return -1;
  }
  let lowest = -1;
  let lowestIndex = -1;
  let check = -1;
  let checkIndex = -1;
  let swap = false;
  for (let i = 0; i < nArr.length; i++) {
    if (swap) break;
    lowestIndex = nArr.length - 1 - i;
    lowest = Number(nArr[lowestIndex]);
    //     console.log('a', lowest, lowestIndex);

    for (let j = i + 1; j < nArr.length; j++) {
      checkIndex = nArr.length - 1 - j;
      check = Number(nArr[checkIndex]);
      //       console.log('b', check, checkIndex);

      if (check < lowest) {
        swap = true;
        break;
      }
      if (check === lowest) {
        break;
      }
    }
  }
  console.log(lowestIndex, checkIndex, swap);
  if (!swap) {
    return -1;
  }
  const newArr = [...nArr];
  newArr[checkIndex] = nArr[lowestIndex];
  newArr[lowestIndex] = nArr[checkIndex];

  let gap = lowestIndex - checkIndex;
  if (lowestIndex - checkIndex === 1 && lowestIndex === newArr.length - 1) {
    return Number(newArr.join(''));
  }

  if (gap === 1) gap = 2;
  const rightMostIndex = newArr.length - 1 - checkIndex;
  const needToSort = newArr.slice(-(rightMostIndex));
  const combined = newArr.slice(0, newArr.length - rightMostIndex).concat(needToSort.sort()).join('');
  return Number(combined);
}

// new implementation after seeing Flavio Maria De Stefano's solution. (https://dev.to/kopiro/kata-resolution-next-bigger-number-with-the-same-digits-41mj)
// After understanding the correct algorithm, nothing much is changed and I wrote it mostly
// the same as De Stefano's solution. 
function nextBigger(n) {
  const digits = n.toString().split('');

  let p = -1;
  for(let i=digits.length; i>0; i--) {
    if (digits[i] > digits[i-1]) {
      p = i - 1;
      break; 
    }
  }

  if (p === -1) return p;

  let right = digits.splice(p);
  const pValue = right.splice(0,1)[0];

  let minValue = Number.MAX_SAFE_INTEGER;
  let minIndex = -1;
  for(let i=0; i < right.length; i++) {
    if(right[i] <= pValue) {
      continue;
    }

    if (right[i] < minValue) {
      minValue = right[i];
      minIndex = i;
    }
  }

  if (minIndex === -1) return minIndex;

  right.splice(minIndex, 1);
  right.push(pValue);
  right = right.sort();

  const nextBigNum = digits.concat([minValue]).concat(right).join('');
  return Number(nextBigNum);
}

nextBigger(59_884_848_459_853);
// 59_884_848_459_853
// 59_884_848_483_559
// 59_884_848_483_559

// problem
// nextBigger(4_178_754_462);

// 4178754462
// 4178754624
// 4214456778
