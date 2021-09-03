let shaders

function preload() {
  shaders = loadShader('../shaders/vertext.vert', '../shaders/fragment.frag')
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  shader(shaders)
}
function draw() {
  rect(0, 0, width, height)
}
