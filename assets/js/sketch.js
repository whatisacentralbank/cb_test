let myImage;
let c;
  x = 1;
  y = 1;

function preload() {
  myImage = loadImage("pope.jpg");
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  background(0);
}

function draw() {
  noStroke();
  
  if (x%10 == 0){
    
  }
  if (x < myImage.width) {
    c = myImage.get(x, y);
    x += 2;
    circle(x+(c[1]*0.05), y+(c[1]*0.05), 3);
    c[0] = 0;
    c [1] = 0;
  print (c[2])
    if (c[2]>120){
      
      c=0;}
    else {
      c='green';
    }
    fill(c);
    
  } else {
    x = 0;
    y = y + 2
    print(c)
  }
}
