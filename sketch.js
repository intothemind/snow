//snow library based on https://www.openprocessing.org/sketch/395389

var quantity = 500;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 2;
var maxFlakeSize = 4;
var linearForce = 1;

var border = 200;

function setup() {
  
  console.log('setup');
  createCanvas(800, 350);
  frameRate(30);
  noStroke();

  
  for(var i = 0; i < quantity; i++) {
    flakeSize.push(round(random(minFlakeSize, maxFlakeSize)));
    xPosition.push(random(-border, width+border));
    yPosition.push(random(-border, height+border));
    direction.push(round(random(0, 1)));
  }
  
}

function draw() {
  
 // console.log('draw');
  background(0);
  
  for(var i = 0; i < xPosition.length; i++) {
    
    fill(255);
    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
    
    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }

    xPosition[i] += linearForce;
    
    yPosition[i] += flakeSize[i] + direction[i]; 
    
    if(xPosition[i] > width + flakeSize[i] + border || xPosition[i] < -flakeSize[i] - border || yPosition[i] > height + flakeSize[i] + border) {
      xPosition[i] = random(-border, width+border);
      yPosition[i] = -flakeSize[i]-border;
    }
    
  }
  
}