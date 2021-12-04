let shaders

function preload() {
  shaders = loadShader('../shaders/vertext.vert', '../shaders/fragment.frag')
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  shader(shaders)
}
function draw() {
  background(0)
  shaders.setUniform('uFrameCount', frameCount)
  sphere(width / 4, 200, 200)
}
