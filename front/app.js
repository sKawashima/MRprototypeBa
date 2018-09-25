import 'reset-css'
import './style.sass'

import E3 from './sound/E3.wav'
import G3 from './sound/G3.wav'
import A3 from './sound/A3.wav'
import B3 from './sound/B3.wav'
import C4 from './sound/C4.wav'
import D4 from './sound/D4.wav'
import E4 from './sound/E4.wav'

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
  tone.E3 = new Tone.Player(E3).toMaster()
  tone.G3 = new Tone.Player(G3).toMaster()
  tone.A3 = new Tone.Player(A3).toMaster()
  tone.B3 = new Tone.Player(B3).toMaster()
  tone.C4 = new Tone.Player(C4).toMaster()
  tone.D4 = new Tone.Player(D4).toMaster()
  tone.E4 = new Tone.Player(E4).toMaster()
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
