
var snow;

function setup() {
  
  createCanvas(800, 600);

  snow = snowMachine();
  frameRate(30);
}

function draw() {
  
 // console.log('draw');
  background(0);

  snow.draw();

  
}