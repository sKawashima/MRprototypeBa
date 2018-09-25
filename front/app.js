import 'reset-css'
import './style.sass'

import A3 from './sound/A3.wav'

import Tone from 'tone'

console.log('hello')

const app = []
const tone = []

// init
window.onload = () => {
  console.log('onload')
  // setup c
  app.c = document.getElementById('app')
  app.c.width = window.innerWidth
  app.c.height = window.innerHeight
  // setup ctx
  app.ctx = app.c.getContext('2d')
  app.ctx.beginPath()
  // setup tone
  tone.A3 = new Tone.Player(A3).toMaster()
  // setup methods
  app.c.addEventListener('touchstart', touchstart)
  app.c.addEventListener('touchmove', touchmove)
  app.c.addEventListener('touchend', touchend)
  app.c.addEventListener('mousedown', () => { tone.A3.restart() })
  app.c.addEventListener('mouseup', () => { console.log('up') })
}

const touchstart = () => {}
const touchmove = () => {}
const touchend = () => {}
