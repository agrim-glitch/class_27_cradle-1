
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    
	ground1 = new Ground(400,20,800,20);

	ground2 = new Ground(300,20,20,20);
	ground3 = new Ground(350,20,20,20);
	ground4 = new Ground(400,20,20,20);
	ground5 = new Ground(450,20,20,20);
	ground6 = new Ground(500,20,20,20);

	bob1 = new Bob(300,400);
	bob2 = new Bob(350,400)
	bob3 = new Bob(400,400)
	bob4 = new Bob(500,400)
	bob5 = new Bob(550,400)

	r1 = new Slingshot(bob1.body,ground2.body,0,0)
	r2 = new Slingshot(bob2.body,ground3.body,0,0)
	r3 = new Slingshot(bob3.body,ground4.body,0,0)
	r4 = new Slingshot(bob4.body,ground5.body,0,0)
	r5 = new Slingshot(bob5.body,ground6.body,0,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(400);
  
 


  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  drawSprites();

}



function mouseDragged(){
    Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}


//function mouseReleased(){
  //  bob5 = null;
//}



   