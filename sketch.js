const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var maxDrops=300;
var dropbody = [];
var bg;
var Umbrella;

function preload(){
    bg=loadImage('download.jpg')

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Umbrella=new umbrella(500,200)
    
}

function draw(){
    Engine.update(engine);
    background (bg)
    Umbrella.display();
    

    for(i=0; i<maxDrops; i++){
        dropbody.push(new drops(random(0,1000),random(0,1000)));
        dropbody[i].display();
        dropbody[i].update();
    }
    
}   

