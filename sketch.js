//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;  
const Constraint = Matter.Constraint;
var engine, world;
var gameState = "ONSLING" 

function preload()
{
 	
}                                          

function setup() {
  createCanvas(1000, 400); 
  

  engine = Engine.create();
  world = engine.world;
 

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	paper1=new paper (50,100,30); 
	box1= new dustbin(800,270,200,200);
//	box2=new dustbin(600,300,20,200);
 // box3=new dustbin(700,10,210,30); 
  
  slingshot = new SlingShot(paper1.body,{x:200, y:200});
	//Create a Ground
	


	Engine.run(engine);

    ground = new Ground (200,390,1600,30);

}


function draw() {
  rectMode(CENTER);
  background("white");

  paper1.display();
  box1.display();
 // box2.display();
 // box3.display();

  ground.display();
  slingshot.display();

  drawSprites();
 
}
/*function keyPressed (){
  if (keyCode === UP_ARROW)	{
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  } 
} 
*/
function mouseDragged(){
  if (gameState!=="launched"){
       Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
   slingshot.fly();
   gameState = "launched";
}


























