
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var top1,paper1
function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	top1=new bar(200,50,100,10);
	top2=new bar(250,50,120,10);
	top3=new bar(300,50,100,10);
	top4=new bar(350,50,100,10);
	top5=new bar(400,50,140,10);
	top6=new bar(450,50,140,10);

	paper1=new paper(200,650,50);
	paper2=new paper(250,650,50);
	paper3=new paper(300,650,50);
	paper4=new paper(350,650,50);
	paper5=new paper(400,650,50);
    paper6=new paper(450,650,50);

	connect1=new connect(paper1.body,top1.body);
    connect2=new connect(paper2.body,top2.body);
	connect3=new connect(paper3.body,top3.body);
    connect4=new connect(paper4.body,top4.body);
	connect5=new connect(paper5.body,top5.body);
    connect6=new connect(paper6.body,top6.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  keyPressed();
  top1.display();
  top2.display();
  top3.display();
  top4.display();
  top5.display();
  top6.display();

  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  paper6.display();

  connect1.display();
  connect2.display();
  connect4.display();
  connect3.display();
  connect4.display();
  connect5.display();
  connect6.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:-30, y:-45});
	}
}



