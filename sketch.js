const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2 
var polygon_img
var sling

function preload(){
  polygon_img=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground1= new Ground(460,375,250,20);
    ground2=new Ground(950,250,230,20);
    ground3 = new Ground(600,height,1200,20);

    block1=new Box(385,370,30,40)
    block2=new Box(400,370,30,40);
    block3=new Box(415,370,30,40);
    block4=new Box(430,370,30,40);
    block5=new Box(445,370,30,40);
   

    block6=new Box(392.5,350,30,40);
    block7=new Box(407.5,350,30,40);
    block8=new Box(438.5,350,30,40);
    block9=new Box(452.5,350,30,40);

    block10=new Box(400,330,30,40);
    block11=new Box(415,330,30,40);
    block12=new Box(430,330,30,40);

    block13=new Box(407.5,310,30,40);

   // block15=new Box(975,245,30,40)
    block16=new Box(915,245,30,40);
    block17=new Box(930,245,30,40);
    block18=new Box(945,245,30,40);
    block19=new Box(960,245,30,40);

    block20=new Box(922.5,225,30,40);
    block21=new Box(937.5,225,30,40);
    block22=new Box(952.5,225,30,40);
  
    block23=new Box(930,205,30,40);
    block24=new Box(945,205,30,40);
   
    polygon=Bodies.circle(100,200,20);
    World.add(world,polygon);
   
    sling=new SlingShot(this.polygon,{x:100,y:200})

    
}
function draw(){
    background("black");
    Engine.update(engine);

   ground1.display();
   ground2.display();
   ground3.display();
   fill(85, 0, 253)
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
  

   fill(0, 0, 57);
   stroke("white")
   strokeWeight(3);
   block6.display();
   block7.display();
   block8.display();
   block9.display();

   fill(85, 0, 253)
   stroke("black")
   strokeWeight(1);
   block10.display();
   block11.display();
   block12.display();

  fill(0, 0, 57);
   stroke("white")
   strokeWeight(3);
   block13.display();
   sling.display();

   fill(85, 0, 253)
   stroke("black")
   strokeWeight(1);
   //block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();

   fill(255, 0, 0)
   stroke("white")
   strokeWeight(3);
   block20.display(); 
   block21.display();
   block22.display();

   fill(85, 0, 253)
   stroke("black")
   strokeWeight(1);
   block23.display();
   block24.display();

   imageMode(CENTER)
   image(polygon_img,polygon.position.x,polygon.position.y,40,40);
   keyPressed();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if (keyCode === 32){
        sling.attach(this.polygon)
    }
}