console.clear()

let posX = 0
let posY = 0


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
  rect(posX, posY, mapX, mapY)
}

function windowResized() {

}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      posX -= 10
      break
    case RIGHT_ARROW:
      posX += 10
      break
    case UP_ARROW:
      posY -= 10
      break
    case DOWN_ARROW:
      posY += 10
      break
    default:
      break
  }
}