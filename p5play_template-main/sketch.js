var box;
function setup() {
  createCanvas(600,600);
  box = createSprite(100,110,50,30);
  
}

function draw() 
{
  background("navy");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x +5;
  }
  drawSprites();

}




