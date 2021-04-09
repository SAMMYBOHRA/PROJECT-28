const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;
var  ball;
var binImg,bin;

function preload()
{
	binImg =loadImage ("IMAGES/dustbin..png");
}

function setup() {
	createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
	paper = new paper();
	ground = new ground ();

	bin = createSprite (954,520,20,20);
	bin.addImage(binImg);
	bin.scale=0.9;

	leftside = new dustbin (902,505,10,120);
	rightside = new dustbin (962,565,130,10);
	bottomside = new dustbin (1024,505,10,120);
	launcher = new launcher (paper.body,{x:200, y:50});

	keyPressedGroup = new Group();
	mouseReleasedGroup = new Group();
	mouseDraggedGroup = new Group ();



	Engine.run(engine);

  
}


function draw(){

	text(mouseX + ',' + mouseY,30,45);
	  
  background("25");

  Engine.update(engine);

  paper.display();
  ground.display();

  bottomside.display();
  leftside.display();
  rightside.display();
  
  
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed (){
    if(keyCode === 32 ){
        launcher.attach(paper.Body);

    }
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		 
	   Matter.Body.applyForce(paper.body,paper.body.pos,{x:50,y:-120});
	   
	}
}