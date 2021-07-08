const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, irony, stone, rubber, irony2, stone2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(800, 60, 25);
    irony = new ohTheIrony(200, 300, 50, 80);
    stone = new Stone(400, 410, 70, 90);
    irony2 = new ohTheIrony(200, 250, 50, 50);
    stone2 = new Stone(500, 200, 50, 50);
  
    Engine.run(engine);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    irony.display();
    stone.display();
    irony2.display();
    stone2.display();
 
}