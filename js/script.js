let shaders, audio, amplitude, fft

let words = [
  'melt',
  'fear',
  'bounce',
  'rabid',
  'fuzzy',
  'gratis',
  'sense',
  'madly',
  'yellow',
  'crazy',
  'ahead',
  'super',
  'classy',
  'craven',
  'sassy',
  'roomy',
  'sedate',
  'gaudy',
  'moldy',
  'groovy',
]

function preload() {
  shaders = loadShader('../shaders/vertext.vert', '../shaders/fragment.frag')
  audio = loadSound('../audio/2.mp3')
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  shader(shaders)

  amp = new p5.Amplitude()
  fft = new p5.FFT()

  audio.play()
}
function draw() {
  background(0)

  fft.analyze()
  const volume = amp.getLevel() // 0 - 1
  // const frequency = fft.getEnergy('mid') // 0 - 255
  let frequency = fft.getCentroid()
  frequency *= 0.001

  const mapF = map(frequency, 0, 10, 0, 40)
  const mapA = map(volume, 0, 0.2, 0, 1.13)

  shaders.setUniform('uTime', frameCount)
  shaders.setUniform('uFrequency', mapF)
  shaders.setUniform('uAmplitude', mapA)

  sphere(width / 6, 200, 200)
}

function mousePressed() {
  if (mouseX > 0 && mouseX > width - 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen()
    fullscreen(!fs)
  } else {
    if (audio.isPlaying()) {
      audio.pause()
    } else {
      audio.play()
    }
  }
}
