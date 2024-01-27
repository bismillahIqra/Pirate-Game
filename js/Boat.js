class Boat{
    constructor(x,y,w,h,boatPos){
        this.body = Bodies.rectangle(x,y,w,h)
        this.speed = 0.05
        this.width = w
        this.height = h
        this.position = boatPos
        this.image = loadImage("assets/boat.png");
        this.isBroken = false;
        World.add(world,this.body)

    }

    animate(){
        
        this.speed += 0.05
        
    }

    remove(index){
        // this.animaton = brokenBoatAnimation;
        this.speed = 0.05;
       // this.width = 300;
        //this.height = 300;
        this.isBroken = true;
        setTimeout(()=>{
            Matter.World.remove(world,boats[index].body);
            boats.splice(index,1);
              },1000);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,this.position,this.width,this.height)
        pop()
    }


}
