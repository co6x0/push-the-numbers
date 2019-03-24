let startBtn = document.getElementById('js-start')
let stopBtn = document.getElementById('js-stop')
let timer = document.getElementById('js-timer')

//timerCount関数の定義
timer.textContent = '10:00'

const timerId = (totalTime, nowTime) => {
  const currentTime = Date.now()
  const diff = currentTime - nowTime

  const mSec = (totalTime - diff) / 10
  const remainMSec = Math.floor(mSec)
  const remainSec = Math.ceil(remainMSec / 100) - 1

  if (remainMSec.length === 1) {
    var cutMSec = '0' + remainMSec.toString()
  } else if (remainSec === 0) {
    var cutMSec = remainMSec
  } else {
    var cutMSec = remainMSec.toString().slice(1)
  }

  let label = '0' + remainSec + ':' + cutMSec
  timer.textContent = label

  if (remainMSec <= 0) {
    clearInterval(timerId)
    label = '00:00'
  }
}

let hogehoge
function test() {
  hogehoge = setInterval(console.log('testlog'), 100)
}

startBtn.addEventListener('click', () => {
  const totalTime = 10000
  const nowTime = Date.now()
  setInterval(timerId(totalTime, nowTime), 25)
})

stopBtn.addEventListener('click', () => {
  if (stopBtn.textContent === 'Restart') {
    setInterval(timerCount.timerId())
    stopBtn.textContent = 'Stop'
  } else {
    clearInterval(timerCount.timerId())
    stopBtn.textContent = 'Restart'
  }
})

//setNumbers関数の定義
let buttons = document.querySelectorAll('#js-game button')

function setNumbers() {
  var numbers = []
  currentNum = 1
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false
  }

  while (numbers.length < buttons.length) {
    let num = Math.floor(Math.random() * 10)
    if (numbers.indexOf(num) === -1 && num !== 0) {
      numbers.push(num)

      if (num === buttons.length) {
        var lastBtn = buttons[numbers.length - 1]
      }
    }
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = numbers[i]
  }

  function hogehoge() {
    if (lastBtn.hasAttribute('disabled')) {
      alert('CLEAR!')
    }
  }

  lastBtn.addEventListener('click', hogehoge)
  startBtn.addEventListener('click', () => {
    lastBtn.removeEventListener('click', hogehoge)
  })
}

//buttonを押した時の挙動の設定
let currentNum = 1
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    let currentBtn = Number(buttons[i].textContent)
    if (!buttons[i].hasAttribute('disabled') && currentBtn === currentNum) {
      buttons[i].disabled = true
      currentNum++
    }
  })
}

//game start
startBtn.addEventListener('click', setNumbers)
//startBtn.addEventListener('click', timerCount)
