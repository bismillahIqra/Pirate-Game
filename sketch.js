const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var cannonball,cannonball_image;
var boat;

var canvas, angle, tower, ground, cannon;
var score = 0;
var balls = [];
var boats = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  } 

  ground = Bodies.rectangle(0, height - 1)
  World.add(world,ground);
  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

angleMode(DEGREES)
var angle = 16

  cannon = new Cannon(180, 110, 130, 100, angle);


  
}

function draw() {

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  for(var i = 0;i<balls.length;i++){
    collisionWithBoats(i)
    showCannonBalls(balls[i]);
  }

  showBoats()


}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    cannonball = new Ball(cannon.x,cannon.y);

    balls.push(cannonball);
  }
}

function showCannonBalls(ball){
if(ball){
ball.display() 
}
}

function keyReleased(){
  if (keyCode===DOWN_ARROW){
    balls[balls.length-1].shoot()
  }

}

function showBoats(){
  if(boats.length > 0){
    if(boats.length < 4 && boats[boats.length - 1].body.position.x < width - 300){
      var positions = [-40,-60,-70,-20]
      var position = random(positions)
      var boat = new Boat(width,height-100,170,170,position)
      boats.push(boat)
      
    }
    for(var i = 0;i < boats.length;i++){
      Matter.Body.setVelocity(boats[i].body,{x:-0.9,y:0})
      boats[i].display();
      boats[i].animate();
    }
  }
    else{
      var boat = new Boat(width,height - 60,170,170,-60)
      boats.push(boat)
      console.log(boat.x);
    }
}

  function collisionWithBoats(index){
      for(var i = 0; i < boats.length;i++){
          if(balls[index] !== undefined && boats[i] !== undefined){
            var collision = Matter.SAT.collides(balls[index].body,boats[i].body)
          console.log("collision", collision.collided)
          if (collision.collided) {
            score+=5
              boats[i].remove(i);
            console.log("boats",boats);
    
            Matter.World.remove(world, balls[index].body);
            delete balls[index];
          }
            
          }
      }
}


