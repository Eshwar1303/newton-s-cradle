
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	roof1 = new roof(width/2,100,width,20);
	bob1 = new bob(200,450,40);
	bob2 = new bob(300,450,40);
	bob3 = new bob(400,450,40);
	bob4 = new bob(500,450,40);
	bob5 = new bob(600,450,40);
	rope1= new rope(bob1.body,{x:200, y:100});
	rope2= new rope(bob2.body,{x:300, y:100});
	rope3= new rope(bob3.body,{x:400, y:100});
	rope4= new rope(bob4.body,{x:500, y:100});
	rope5= new rope(bob5.body,{x:600, y:100});
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



