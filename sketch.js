var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	engine = Engine.create();
	world = engine.world;
	
	
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
	World.add(world, ground);



	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:3, isStatic:true});

	//Create a Ground
	
	Engine.run(engine);
  
}


function draw() {
	packageSprite.x= packageBody.position.x 
		packageSprite.y= packageBody.position.y 
	
  rectMode(CENTER);
  background(0);

  
	
  drawSprites();
 
}

function keyPressed()
 { if (keyCode === DOWN_ARROW)
	 { Matter.Body.setStatic(packageBody,false); } }

		  
	
	
   
   

