console.clear();

let audio;
let fft;
let peakDetect;
const bins = 64;
let bgColor = 0;

function preload() {
  audio = loadSound('audio/4.mp3');
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.mouseClicked(togglePlay);
  fft = new p5.FFT();
  peakDetect = new p5.PeakDetect(400, 2600, 0.1);
  peakDetect.onPeak(peakDetected);
}

function draw() {
  background(bgColor);
  noStroke();

  fft.analyze(bins);
  peakDetect.update(fft);
}

function peakDetected() {
  bgColor = color(random(255), random(255), random(255));
}

function togglePlay() {
  if (audio.isPlaying()) {
    audio.pause();
  } else {
    audio.loop();
  }
}

function windowResized() {}
