var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness  = random(22,83);
  speed = random(223,321);
  weight = random(30,52);


  wall = createSprite(200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}



function draw() {
  background(255,255,255);  

  function hasCollided(bullet,wall)
  {
bulletRightEdge = bullet.X+bullet.width;
wallLeftEdge = wall.X;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;



if(hasCollided(bullet,wall))
{
bullet.velocityX = 0;
var damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness);

if(damage>10)
{

}
wall.shapeColor = color(255,0,0);
}
if(damage<10)
{
  wall.shapeColor = cplor(0,255,0);
}

  }

drawSprites();

}