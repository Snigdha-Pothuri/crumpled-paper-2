//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}                                          

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	paper1=new paper (50,100,30); 
	box1= new dustbin(370,300,20,200);
	box2=new dustbin(200,300,20,200);
	box3=new dustbin(290,390,170,20); 
	//Create a Ground
	


	Engine.run(engine);

    ground = new Ground (200,390,400,30);

}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  drawSprites();
 
}
function keyPressed (){
  if (keyCode === 32)	{
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  } 
}

























