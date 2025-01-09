const { typewriter, backspaceChars, delay } = require('./typewriter')
const boxen = require('boxen').default
const chalk = require('chalk')
const gradient = require('gradient-string')
const figlet = require('figlet')

function card() {
  const data = [
    `${chalk.bold('Website: ')}  ${chalk.cyan('https://rat.codes/')}`,
    `${chalk.bold('Github:')}    ${chalk.cyan('https://github.com/')}${chalk.yellowBright('RatWithoutAFace')}`,
    `${chalk.bold('Discord:')}   ${chalk.cyan('https://discord.com/users/')}${chalk.yellowBright('1322361413687316540')}`,
    `${chalk.bold('Twitter/X:')} ${chalk.cyan('https://twitter.com/')}${chalk.yellowBright('ratwithaface')}`,
    `${chalk.bold('Email:')}     ${chalk.cyan('face@rat.codes')}`
  ]
  
  const dataString = data.join('\n')
  typewriter(boxen(gradient.retro(figlet.textSync('ratwithaface', { font: 'Slant'} )) + '\n' + dataString , { padding: 2, margin: 1, borderStyle: 'round', borderColor: 'magentaBright', float: 'center' }), 0.1, 40)
}

console.clear()
typewriter('Hello, World!', 100)
  .then(() => backspaceChars(13))
  .then(() => typewriter(`My name is ratwithaface!`, 75))
  .then(() => delay(1000))
  .then(() => backspaceChars(24, 50))
  .then(() => typewriter(`I'm a full stack developer that makes weird shit.`, 60))
  .then(() => delay(1000))
  .then(() => backspaceChars(49, 30))
  .then(() => delay(1000))
  .then(() => { 
    console.clear()
    card() 
  })