//snow library based on https://www.openprocessing.org/sketch/395389

var quantity = 500;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var age = [];
var minFlakeSize = 2;
var maxFlakeSize = 4;
var linearForce = 0;
var appearTime = 30;

var pointForceCenter; 
var pointForce = 0.01;

var border = 200;

var slider;

function setup() {
  
  console.log('setup');
  createCanvas(800, 600);
  frameRate(30);
  noStroke();


  slider = createSlider(0,100,0);
  slider.position(20,20);

  pointForceCenter = createVector(width/2,height/2);

  
  for(var i = 0; i < quantity; i++) {
    flakeSize.push(round(random(minFlakeSize, maxFlakeSize)));
    xPosition.push(random(-border, width+border));
    yPosition.push(random(-border, height+border));
    direction.push(round(random(0, 1)));
    age.push(0);
  }
  
}

function draw() {
  
 // console.log('draw');
  background(0);


  pointForce = map(slider.value(),0,100,0,0.1);
  fill(255);
  text(pointForce,100,20);
  
  for(var i = 0; i < xPosition.length; i++) {
    

    var opacity = 255;
    if(age[i]<appearTime){
    	opacity = map(age[i],0,appearTime,0,255);
    }
    fill(255,opacity);
    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
    
    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }


    //point Force
    var pos = createVector(xPosition[i],yPosition[i]);
    var pVel = p5.Vector.sub(pos,pointForceCenter);
    pVel.mult(pointForce);
    
     //linear force
    xPosition[i] += linearForce + pVel.x;
    yPosition[i] += flakeSize[i] + direction[i] + pVel.y; 

    age[i]++;
    
    if(xPosition[i] > width + flakeSize[i] + border || xPosition[i] < -flakeSize[i] - border || yPosition[i] > height + flakeSize[i] + border) {
      xPosition[i] = random(-border, width+border);
      yPosition[i] = -flakeSize[i]-border;

      if(pointForce>0){
      	 yPosition[i] = random(-flakeSize[i],pointForceCenter.y);
      }
      age[i] = 0;
    }
    
  }
  
}