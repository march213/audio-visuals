let myShaders,
  audio,
  amp,
  fft,
  beatDetect,
  bgColor = 0;

let words = [
  'real',
  'hear',
  'bite',
  'dash',
  'arm',
  'code',
  'TRUE',
  'girl',
  'sun',
  'tick',
  'lift',
  'dare',
  'poll',
  'soap',
  'game',
  'acid',
  'rest',
  'gaudy',
  'fall',
  'kick',
];

const texts = [...document.querySelectorAll('.text span')];

function preload() {
  shaders = loadShader('../shaders/vertext.vert', '../shaders/fragment.frag');
  audio = loadSound('../audio/1.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  amp = new p5.Amplitude();
  fft = new p5.FFT();

  beatDetect = new p5.PeakDetect(20, 2000, 0.5);
  beatDetect.onPeak(triggerBeat);

  shader(shaders);
}

function draw() {
  background(0);

  fft.analyze();
  beatDetect.update(fft);

  let frequency = fft.getCentroid();
  frequency *= 0.001;

  const mapFreq = map(fft.getEnergy('mid'), 0, 50, 0, 0.1);
  const mapCentroid = map(frequency, 0, 5, -1, 0.5);

  shaders.setUniform('uTime', frameCount);
  shaders.setUniform('uFrequency', mapFreq);
  shaders.setUniform('uAmplitude', mapCentroid);

  sphere(width / 6, 200, 200);
}

function triggerBeat() {
  texts.forEach((el, i) => {
    setTimeout(() => {
      el.innerHTML = random(words);
    }, random(200) * i);
  });
}

function mousePressed() {
  if (mouseX > 0 && mouseX > width - 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  } else {
    if (audio.isPlaying()) {
      audio.pause();
    } else {
      audio.play();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
