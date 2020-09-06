var rect;
var string;
var box;
function setup() {
  createCanvas(300,300);
rect = createSprite(150,10,150,10);
rect.shapeColor = "green";
box = createSprite(150,140,100,100);
box.shapeColor = "red";
string = createSprite(150,75,1.5,125);
string.shapeColor = "black";

}
function keyPressed(){
  if(keyDown("SPACE")){
    box.velocityX = 2;  
  }
  if(box.x>240){ 
    box.velocityX = -2;
  }
  if(box.x<60){
    box.velocityX = 2;
  }
}
function draw() {
  background("white");
  text(mouseX + ',' + mouseY, 10, 15); 


  drawSprites();
}