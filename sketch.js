function setup() {
  createCanvas(windowWidth, windowHeight);
}

  function draw() {
  background(229,223,69);
  strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(16 + (mouseX / width)*72);
  text("Beautiful things happen when you distance yourself from the negative.", 50, 200);
  text("美好的事情总是发生在你远离消极事情的时候.",100,300);
}


