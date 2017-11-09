
var snow;

function setup() {
  
  createCanvas(800, 600);

  snow = snowMachine();

  //center of the point force, um die Bewegunsrichtung zu setzen
  snow.setCenter(width/2,height/2);

  //set the flake min size and max size
  //snow.setFlakeSize(2,10);

  frameRate(30);
}

function draw() {
  
 // console.log('draw');
  background(0);


  //======linear force, z.B. um Wind zu simulieren====
  // var lforce = map(mouseX,0,width,-10,10);
  // snow.setLinearForce(lforce);

  //======point force, z.B. um Forwärtsgeschwindigkeit zu simulieren
  // var pforce = map(mouseX,0,width,0,0.5);
  // snow.setPointForce(pforce);

  //======flake weight, je schwerer desto schneller fallen die Flocken
  //var weight = map(mouseX,0,width,0,2);
  //snow.setFlakeWeight(weight);

  snow.draw();

  
}