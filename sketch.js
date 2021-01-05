
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var world;
//var engine;
var bar1;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	bar1 = new bar (width/2,height/4,width/7,20);
	//Create the Bodies Here.


	ballDiameter=50;

	startBallPositionX=width/2;
	startBallPositionY=height/4+300;
	ball1=new ball(startBallPositionX-ballDiameter*2,startBallPositionY,ballDiameter);
	ball2=new ball(startBallPositionX-ballDiameter,startBallPositionY,ballDiameter);
	ball3=new ball(startBallPositionX,startBallPositionY,ballDiameter);
	ball4=new ball(startBallPositionX+ballDiameter,startBallPositionY,ballDiameter);
	ball5=new ball(startBallPositionX+ballDiameter*2,startBallPositionY,ballDiameter);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	})


	rope1=new rope(ball1.body,bar1.body,-ballDiameter*2, 0)
	rope2=new rope(ball2.body,bar1.body,-ballDiameter*1, 0)
	rope3=new rope(ball3.body,bar1.body,0, 0)
	rope4=new rope(ball4.body,bar1.body,ballDiameter*1, 0)
	rope5=new rope(ball5.body,bar1.body,ballDiameter*2, 0)
	
	/*constraint1={
		bodyA:ball1.body,
		bodyB:bar1.body,
		pointB: {x:-ballDiameter*2, y:0}
	}

	constraint2={
		bodyA:ball2.body,
		bodyB:roofObject.body,		
		pointB: {x:-ballDiameter, y:0}
	}


	constraint3={
		bodyA:ball3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:ball4.body,
		bodyB:roofObject.body,		
		pointB: {x:ballDiameter, y:0}	

	}

	constraint5={
		bodyA:ball5.body,
		bodyB:roofObject.body,		
		pointB: {x:ballDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  bar1.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

	}
}

function drawLine(constraint)
{
	ballBodyPosition=constraint.bodyA.position
	bar1BodyPosition=constraint.bodyB.position

	bar1BodyOffset=constraint.pointB;
	
	bar1BodyX=bar1BodyPosition.x+bar1BodyOffset.x
	bar1BodyY=bar1BodyPosition.y+bar1BodyOffset.y
	line(ballBodyPosition.x, ballBodyPosition.y, bar1BodyX,bar1BodyY);
}


