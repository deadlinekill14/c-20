var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);
  
  movingRect=createSprite(40, 30,10, 20);
  movingRect.shapeColor= "yellow";

  fixedRect=createSprite(20,30,16,16);
  fixedRect.shapeColor="blue";
}

function draw() {
  background("aqua");  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

console.log(movingRect.x-fixedRect.x);
//console.log(movingRect.y-fixedRect.y);

if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
{

  movingRect.shapeColor= "green";
  fixedRect.shapeColor="green";
}



  drawSprites();
}





