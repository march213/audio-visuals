console.clear()


function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER);
  strokeWeight(20)
}

function draw() {
  background(0)
  fill(255, 204, 0)
  stroke('white')
  translate(width / 2, height / 2)

  const mapX = map(mouseX, 0, width, 0, 500)
  const mapY = map(mouseY, 0, height, 0, 500)
  rect(0, 0, mapX, mapY)
}

function windowResized() {

}
