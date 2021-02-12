const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand;

var block1, block2, block3, block4, block5, block6, block7, block8,block9, block10, block11, block12, block13, block14, block15, block16;
var ablock1, ablock2, ablock3, ablock4, ablock5, ablock6, ablock7, ablock8, ablock9, ablock10, ablock11, ablock12, ablock13, ablock14, ablock15, ablock16;

var polygon;

var slingshot;
function preload(){
  polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(700,200,250,20);
  stand2 = new Ground(400,400,250,20);

  //blocks for stand 1

  //level one
  block1 = new Block(610, 180, 30, 30);
  block2 = new Block(640, 180, 30, 30);
  block3 = new Block(670, 180, 30, 30);
  block4 = new Block(700, 180, 30, 30);
  block5 = new Block(730, 180, 30, 30);
  block6 = new Block(760, 180, 30, 30);
  block7 = new Block(790, 180, 30, 30);
  //level two
  block8  = new Block(640, 100, 30, 30);
  block9  = new Block(670, 100, 30, 30);
  block10 = new Block(700, 100, 30, 30);
  block11 = new Block(730, 100, 30, 30);
  block12 = new Block(760, 100, 30, 30);
//level three
  block13 = new Block(670, 50, 30, 30);
  block14 = new Block(700, 50, 30, 30);
  block15 = new Block(730, 50, 30, 30);
  //top
  block16 = new Block(700, 10, 30, 30);

    //blocks for stand 2

  //level one
  ablock1 = new Block(310, 180, 30, 30);
  ablock2 = new Block(340, 180, 30, 30);
  ablock3 = new Block(370, 180, 30, 30);
  ablock4 = new Block(400, 180, 30, 30);
  ablock5 = new Block(430, 180, 30, 30);
  ablock6 = new Block(460, 180, 30, 30);
  ablock7 = new Block(490, 180, 30, 30);
  //level two
  ablock8  = new Block(340, 100, 30, 30);
  ablock9  = new Block(370, 100, 30, 30);
  ablock10 = new Block(400, 100, 30, 30);
  ablock11 = new Block(430, 100, 30, 30);
  ablock12 = new Block(460, 100, 30, 30);
//level three
  ablock13 = new Block(370, 50, 30, 30);
  ablock14 = new Block(400, 50, 30, 30);
  ablock15 = new Block(430, 50, 30, 30);
  //top
  ablock16 = new Block(400, 10, 30, 30);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon, {x:100,y:200});
  
  
}
function draw() {
  background("black");
  Engine.update(engine);
  

  stand1.display();
  stand2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  ablock2.display();
  ablock1.display();
  ablock3.display();
  ablock4.display();
  ablock5.display();
  ablock6.display();
  ablock7.display();
  ablock8.display();
  ablock9.display();
  ablock10.display();
  ablock11.display();
  ablock12.display();
  ablock13.display();
  ablock14.display();
  ablock15.display();
  ablock16.display();

  image(polygonImage,polygon.position.x, polygon.position.y,40,40);
  
  slingshot.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}



function mouseReleased()
{
  slingshot.fly();
}

