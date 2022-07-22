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

const multiply = (num1, num2) => {
  let baseNum = num2;
  let repeater = num1;
  if (num1.length > num2.length) {
    baseNum = num1;
    repeater = num2;
  }

  if (Number(baseNum) === 1) {
    return Number(repeater).toString();
  }

  if (Number(repeater) === 1) {
    return Number(base).toString();
  }

  // 50
  //
  let baseResult = '0';
  for (let counter = 0; counter < repeater.length; counter++) {
    let currRepeaterDigit = repeater.charAt(repeater.length - 1 - counter) || 0;
    if (currRepeaterDigit === '0') {
      continue;
    }

    let result = '';
    let isMore10 = false;
    let carryNumber = 0;
    for (let baseMover = 0; baseMover < baseNum.length || carryNumber !== 0; baseMover++) {
      let currBaseDigit = baseNum.charAt(baseNum.length - 1 - baseMover) || 0;
      let currRes = Number(currRepeaterDigit) * Number(currBaseDigit) + carryNumber;

      isMore10 = currRes >= 10; 
      carryNumber = isMore10 ? Number(currRes.toString().charAt(0)) : 0;
      result = (isMore10 ? currRes.toString().charAt(1) : currRes.toString().charAt(0)) + result;
    }

    result = result + "".padEnd(counter, '0');
    baseResult = add(baseResult, result);
  }
  
  return baseResult === '0' ? baseResult : baseResult.replace(/^0*/, '');
}

// add('12', '6');
// multiply('1020303004875647366210', '2774537626200857473632627613');
// multiply('330', '467');
// multiply('5', '20');
multiply('2', '');