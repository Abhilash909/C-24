const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var Pig1, pig2;
var log1, log2, log3, log4;
var bird1

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,500,50,50);
    box2 = new Box(900,500,50,50);
    ground = new Ground(500,height,1000,20)
   
    pig1 = new Pig(800,500,35,35);
    pig2 = new Pig(800,400,35,35);

    log1 = new Log(800,450,300,PI/2)
    box3 = new Box(700,400,50,50);
    box4 = new Box(900,400,50,50);
    log2 = new Log(800,350,300,PI/2);
    box5 = new Box(800,300,60,60);
    log3 = new Log(750,250,120,PI/5)
    log4 = new Log(850,250,120,PI/-5)

    bird1 = new Bird(300,350,40,40)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}