console.clear()

let audio
let amp
let fft


function preload() {
  audio = loadSound('audio/2.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER);

  audio.play()
  // amp = new p5.Amplitude()
  fft = new p5.FFT()
}

function draw() {
  background(0)
  stroke(255, 204, 0)
  fill(255, 204, 0)


  // const volume = amp.getLevel()
  // const mapW = map(volume, 0, 1, 0, 500)
  // rect(0, 0, mapW, 500)

  // const waveform = audio.getPeaks()
  // for (let i = 0; i < waveform.length; i++) {
  //   line(i, waveform[i] * 10, i, waveform[i] * -10)
  // }

  const waveform = fft.waveform()

  for (let i = 0; i < waveform.length; i++) {
    const x = map(i, 0, waveform.length, 0, width)
    const y = map(waveform[i], -1, 1, 0, height)
    point(x, y)
  }
}

function windowResized() {

}

