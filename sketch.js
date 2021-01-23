
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(550,height,1100,20);
	paper = new Paper(100,200);
	block1 = new Basket(780,590,20,160);
    block2 = new Basket(1000,590,20,160);
    block3 = new Basket(890,680,240,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 paper.display();
 block1.display();
 block2.display();
 block3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}



