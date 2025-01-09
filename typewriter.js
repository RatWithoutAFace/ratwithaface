function typewriter(text, delay = 100, charsAtOnce = 1) {
  return new Promise((resolve, reject) => {
    let i = 0
    const interval = setInterval(() => {
      if (i >= text.length) {
        clearInterval(interval)
        resolve()
      } else {
        process.stdout.write(text.substr(i, charsAtOnce))
        i += charsAtOnce
      }
    }, delay)
  })
}

function backspaceChars(amount, delay = 100) {
  return new Promise((resolve, reject) => {
    let i = 0
    const interval = setInterval(() => {
      if (i >= amount) {
        clearInterval(interval)
        resolve()
      } else {
        process.stdout.write("\b \b");
        i++
      }
    }, delay)
  })
}

function delay(time) { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

module.exports = {
  typewriter,
  backspaceChars,
  delay
}