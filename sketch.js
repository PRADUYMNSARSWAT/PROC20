var movingRect;
var fixedRect


function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 movingRect= createSprite(500, 200, 50, 50);
}

function draw() {
  background("pink");
  movingRect.x=mouseX
  movingRect.y=mouseY  
  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2
    ) {
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
    
  }


  drawSprites();
}