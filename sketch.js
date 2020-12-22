var bullet, wall, thickness;
var speed , weight;







function setup() {
  createCanvas(1600, 400);

  
  
  //bullet 
 bullet  =  createSprite(50, 200, 50, 50);
bullet.shapeColor = "white"



wall = createSprite(1000, 200, thickness, height/2 )
wall.shapeColor = (80,80,80) ;
thickness = random(22, 83)


}

function draw() {
  background("purple")

 if(keyDown("space")){
 bullet.velocityX = speed
} 

speed = random(223, 321)
weight = random(30, 52)

bullet.velocityX = speed;
  
if(bullet.x - wall.x <  bullet.width/2 + wall.width/2 ){
bullet.velocityX = 0
var damge= 0.5*weight*speed*speed/thickness*thickness*thickness
}
drawSprites();

}