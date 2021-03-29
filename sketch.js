const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
   stone1 = new Stone(800,550,80,80)
   stone2 = new Stone(500,550,60,100)
   stone3 = new Stone(300,550,100,60);
    hammer = new Hammer(10,100);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
 stone2.display();
 stone3.display();
  
    
 
}