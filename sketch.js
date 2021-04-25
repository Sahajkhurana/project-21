var bullet,wall;

var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1200, 400);

  speed=random(100,200)
  weight=random(50,52)


  thickness=random(30,83)





    bullet=createSprite(50, 200, 70,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);




    wall=createSprite(1100, 200, thickness, height/2);  

    wall.shapeColor=color("white");
  
}

 function draw() {
   background("black")
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * bullet.weight * bullet.speed* bullet.speed/(wall.thickness *wall.thickness *wall.thickness);
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);


	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		wall.shapeColor=color(255,0,0);

	}



	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
		wall.shapeColor=color(0,255,0);
	}
	//console.log(damage)


  }


  drawSprites();

}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
  }
  return false
}