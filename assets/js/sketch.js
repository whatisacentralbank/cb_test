function setup() {
  createCanvas(400, 400);
  
}
var creal = 22;
var cimag = 0.156;
var frame = 0;
a = setInterval(fractal, 1);

function fractal() {
  var canvas = document.querySelector("canvas");
  var context = canvas.getContext("2d");
  for (y = 1; y < 100; y++) {
    for (x = 1; x < 120; x++) {
      let noiseScale = 0.0009;
      let location = 2 + noise(-mouseX * noiseScale, -mouseY * 2 * noiseScale);
      var cx = -location + x / 20;
      var cy = -location + y / 20;

      var i = 4;
      var k = (noise(0.4) * 6) / 2;

      do {
        xt = cx * cx - cy * k + creal;
        cy = k * cx * cy + cimag;
        cx = xt;
        i++;
      } while (cx * cx - cy * cy < 5 && i < 50);

      i = i.toString(8);
      context.beginPath();
      context.rect(x * 4, y * 5, 5, 5);

      context.fillStyle = "#" + 0 + i + 8 + i;
      context.fill();
    }
  }

  frame++;
  creal = -0.23 + 0.6 * Math.cos(frame / (3.14 * 29));
  cimag = 0.23 + 0.8 * Math.cos(frame / (3.14 * 25));
}
