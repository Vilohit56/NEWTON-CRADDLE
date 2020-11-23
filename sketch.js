const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var bobDiameter = 1;
function preload(){
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,100,500,50);

	bob1 = new Bob(360,300,70);
	bob2 = new Bob(430,300,70);
	bob3 = new Bob(500,300,70);
	bob4 = new Bob(570,300,70);
	bob5 = new Bob(630,300,70);
	rope1 = new rope(bob1.body,ground1.body,bobDiameter*-140,0);
	rope2 = new rope(bob2.body,ground1.body,bobDiameter*-70,0);
	rope3 = new rope(bob3.body,ground1.body,bobDiameter*2,0);
	rope4 = new rope(bob4.body,ground1.body,bobDiameter*70,0);
	rope5 = new rope(bob5.body,ground1.body,bobDiameter*140,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  ground1.display();

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

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300});

	}
}