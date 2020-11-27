
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree, treeImg;
var boy1, boyImg;
var stone1, stoneImg;
var mango, mangoImg;
var backgroundImg;
var gameState = "onHand";

function preload()
{
	treeImg = loadImage("Plucking mangoes/tree.png");
	boyImg = loadImage("Plucking mangoes/boy.png");
	stoneImg = loadImage("Plucking mangoes/stone.png");
	mangoImg = loadImage("Plucking mangoes/mango.png");
	backgroundImg = loadImage("Plucking mangoes/bg2mango.png");
}

function setup() {
	var canvas = createCanvas(1200, 600);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600, height, 1200, 20);

	tree = createSprite(925, 350, 10, 10);
	tree.addImage(treeImg);
	tree.scale = 0.4;

	/*boy = createSprite(310, 515, 10, 10);
	boy.addImage(boyImg);
	boy.scale = 0.1;*/

	stone1 = new Stone(310, 515);
	stone1.scale = 0.5;
	
	boy1 = new Boy(stone1.body,{x:310, y:515});
	boy1.scale = 0.1;

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  stone1.display();
  boy1.display();

  //mouseDragged();
  //mouseReleased();
  
  drawSprites();
 
}

function mouseDragged(){
    if(gameState !== "launched"){
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    boy1.fly();
    gameState = "launched";
}

