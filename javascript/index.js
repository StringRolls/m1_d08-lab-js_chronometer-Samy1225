const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const minutes = printMinutes();
  const seconds = printSeconds();
  
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

function printMinutes() {
  //minDecElement.innerText = chronometer.getMinutes().toFixed(1)
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes())
}

function printSeconds() {
  //secDecElement.innerText = chronometer.getSeconds().toFixed(1)
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const timeSplit = chronometer.split()
  const newLi = document.createElement ('li');
  newLi.innerText = timeSplit;
  //const splitsElement = document.getElementById('splits');
  splitsElement.appendChild(newLi)

}

function clearSplits() {
  splitsElement.innerText = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop'
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split'
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else if (btnLeftElement.innerText === 'STOP') {
    setStartBtn();
    setResetBtn();
    chronometer.stop(printTime);
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    chronometer.stop()
    chronometer.reset()

   minDecElement.innerText = '0';
   minUniElement.innerText = '0';
   secDecElement.innerText = '0';
   secUniElement.innerText = '0';
   
   clearSplits();
  } else {
    printSplit()
  }
});
