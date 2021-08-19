 const Engine=Matter.Engine;  //esta linea crea el motor fisico
 const World=Matter.World;   //esta linea crea un mundo fisico
 const Bodies=Matter.Bodies; //esta linea crea los objetos fisicos del mundo

var engine,world
var box1,box2

 function setup(){
    var canvas = createCanvas(400,400);
engine=Engine.create();
world=engine.world;
box1=new Box(200,50,50,50);
box2=new Box(220,100,50,50);
}
function draw(){
    background(0);
Engine.update(engine);
box1.display();
box2.display();
}