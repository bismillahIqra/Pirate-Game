class Ball{

    constructor(x,y){
    
        var options = {
            isStatic: true
        }
        this.r = 30
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    
        this.ball_image= loadImage("./assets/cannonball.png");
       
    }

     shoot(){
        var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})
     }
        
    display(){
        push()
        imageMode(CENTER);
        image(this.ball_image,this.body.position.x,this.body.position.y,this.r,this.r);
        pop()  
    }
    
    }

