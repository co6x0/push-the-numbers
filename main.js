let buttons = document.querySelectorAll('#js-game button')
let startBtn = document.getElementById('js-start')
let timer = document.getElementById('js-timer')
let currentNum = 1

timer.textContent = '10:00'
function timerCount() {
  const totalTime = 10000
  const nowTime = Date.now()

  const timerId = setInterval(() => {
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

    if (remainMSec <= 0) {
      clearInterval(timerId)
      label = '00:00'
    }

    timer.textContent = label
  }, 25)
}

function setNumbers() {
  let numbers = []
  currentNum = 1
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false
  }

  while (numbers.length < buttons.length) {
    let num = Math.floor(Math.random() * 10)
    if (numbers.indexOf(num) === -1 && num !== 0) {
      numbers.push(num)
    }
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = numbers[i]
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    let currentBtn = Number(buttons[i].textContent)
    if (!buttons[i].hasAttribute('disabled') && currentBtn === currentNum) {
      buttons[i].disabled = true
      currentNum++
    }
  })
}

startBtn.addEventListener('click', setNumbers)
startBtn.addEventListener('click', timerCount)
