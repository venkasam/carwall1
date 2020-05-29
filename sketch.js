
var car,wall,S,weight;


function setup() {
  createCanvas(800,400);
  car=createSprite(50,200,40,20);
  wall=createSprite(750,200,30,200);
  S=random(20,100)
  weight=random(200,1600)
}

function draw() {
  background("purple");  
car.velocityX=S

if((S*S*weight*5)/22500<=80&&car.collide(wall)){
wall.shapeColor="Green"
car.velocityX=0
}
if(80<(S*S*weight*5)/22500<=180&&car.collide(wall)){
  wall.shapeColor="orange"
  car.velocityX=0
  }
  if((S*S*weight*5)/22500>180&&car.collide(wall)){
    wall.shapeColor="red"
    car.velocityX=0
    }




  drawSprites();
}