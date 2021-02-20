
var fixedRect, movingRect;
var gameObject1, gameObject2;
var basket,ball;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  basket = createSprite(40,150,20,20);
  basket.shapeColor ="violet";

  ball = createSprite(600,150,10,10);
  ball.shapeColor = "yellow";
  ball.velocityX=-4;


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching()){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "pink"
  }
 
collide(ball,basket);

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}

function collide(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
 object1.setVelocity(0,0)
    }
}


