let shaders, audio, amplitude, fft

function preload() {
  shaders = loadShader('../shaders/vertext.vert', '../shaders/fragment.frag')
  audio = loadSound('../audio/1.mp3')
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

  const mapF = map(frequency, 0, 10, 0, 20)
  const mapA = map(volume, 0, 0.2, 0, 0.5)

  shaders.setUniform('uTime', frameCount)
  shaders.setUniform('uFrequency', mapF)
  shaders.setUniform('uAmplitude', mapA)

  sphere(width / 6, 200, 200)
}
