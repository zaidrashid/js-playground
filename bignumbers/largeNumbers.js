const add = (num1, num2) => {
  const maxLength = Math.max(num1.length, num2.length);

  let result = '';
  let carryNumber = 0;
  for (let i = 0; i < maxLength || carryNumber !== 0; i++) {
    const currDigit1 = Number(num1.charAt(num1.length - 1 - i)) || 0;
    const currDigit2 = Number(num2.charAt(num2.length - 1 - i)) || 0;

    const currSum = currDigit1 + currDigit2 + carryNumber;
    const isMore10 = currSum >= 10;
    const currSumStr = currSum.toString();
    carryNumber = isMore10 ? Number(currSumStr.charAt(0)) : 0;
    result = (isMore10 ? currSumStr.toString().charAt(1) : currSumStr.toString().charAt(0)) + result;
  }

  return result;
}

// add('12', '6');
multiply('1020303004875647366210', '2774537626200857473632627613')