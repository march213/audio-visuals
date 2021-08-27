console.clear()

let audio
let amp


function preload() {
  audio = loadSound('audio/3.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER);

  audio.play()
  amp = new p5.Amplitude()

}

function draw() {
  background(0)
  fill(255, 204, 0)

  translate(width / 2, height / 2)

  const volume = amp.getLevel()
  const mapW = map(volume, 0, 1, 0, 500)

  rect(0, 0, mapW, 500)
}

function windowResized() {

}

