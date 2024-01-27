class Dummy{

    constructor(x,y){

        var options = {
            isStatic: true
        }
        this.x = x
        this.y = y
        this.height = height
        this.width = width 

        this.body = Bodies.rectangle(this.x,this.y,this.height,this.width,options);
        World.add(world,this.body);

    }

    display(){
        push()
        imageMode(CENTER);
        image(this.ball_image,this.body.position.x,this.body.position.y,this.r,this.r);
        pop()
    }
}
