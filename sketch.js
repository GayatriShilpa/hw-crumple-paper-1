
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1=new Bin(550,610,20,100);
 	side2=new Bin(730,610,20,100);
	side3=new Bin(640,650,200,20);

	ground=new Ground(width/2, 660, width, 10);

	paper1=new Paper(200,610,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 side1.display();
 side2.display();
 side3.display();

 ground.display();

 paper1.display();

drawSprites();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}
