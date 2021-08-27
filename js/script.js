console.clear()


function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER);
}

function draw() {
  translate(width / 2, height / 2)
  fill(255, 204, 0)
  rect(0, 0, 500, 500)
}

function windowResized() {

}
