// Timer using setTimeout

let timeOutId;
let nextExpected;
let drift = 0;
const printTime = () => {
  if (timeOutId) {
    clearTimeout(timeOutId);
  }
  const now = new Date;

  let dx;
  if (nextExpected) {
    // get the differences with the nextExpected ticks
    // and accumulate in the drift's variable
    dx = now.getTime() - nextExpected;
    drift += dx;
  }
  nextExpected = now.getTime() + 1000;

  let delay = 1000;
  // If the drift exceeds 20ms, reset by calling the next timeout
  // a little bit earlier
  if (drift >= 20) {
    // minus extra 2ms as I noticed even calling with excat delayed,
    // it will be delayed around 2/3 ms. 
    // Note: This is merely a guessing number, but we can assume that
    // 2 ms is barely noticable by the human eye.
    delay = delay - drift - 2;
    drift = 0;
    nextExpected = 0;
  }
  console.log(new Date, dx, drift, delay);
  timeOutId = setTimeout(printTime, delay);
};

timeOutId = setTimeout(printTime, 1000);