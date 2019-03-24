let startBtn = document.getElementById('js-start')
let timer = document.getElementById('js-timer')
let buttons = document.querySelectorAll('#js-game button')
let numbers = []

//timerCount関数の定義
timer.textContent = '10:00'

const timerId = (clear, totalTime, nowTime) => {
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

  if (remainMSec <= 0 || clear === true) {
    clearInterval(timerId)
    label = '00:00'
    timer.textContent = label
  }
}

//buttonを押した時の挙動

startBtn.addEventListener('click', () => {
  const totalTime = 10000
  const nowTime = Date.now()
  setInterval(timerId, 25, false, totalTime, nowTime)
})
